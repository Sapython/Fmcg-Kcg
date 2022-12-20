import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera } from '@capacitor/camera';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  sale:any;
  constructor(private activatedRoute:ActivatedRoute,private databaseService:DataBaseService,private alertify:AlertsAndNotificationsService,private dataProvider:DataProviderService) {}
  saleForm:FormGroup = new FormGroup({
    customerName:new FormControl('',[Validators.required]),
    customerPhone:new FormControl('',[Validators.maxLength(10)]),
    customerAddress:new FormControl('',[Validators.maxLength(400)]),
  });
  finalPrice:number = 0;
  totalItems:number = 0;
  addStockModal:boolean = false;
  stocks:any[] = [];
  selectedStocks:any[] = [];
  changeableControls:FormGroup = new FormGroup({})
  calculateTotal(){
    this.changeableControls.valueChanges.subscribe((data)=>{
      this.finalPrice = 0;
      this.totalItems = 0;
      this.selectedStocks.forEach((stock)=>{
        this.totalItems += stock.control.value;
        this.finalPrice += stock.control.value * stock.priceControl.value;
      })
    })
  }
  ngOnInit() {
    this.databaseService.getStocks().then((data)=>{
      this.stocks = [];
      data.forEach((stock)=>{
        let control = new FormControl(1,[Validators.required,Validators.max(stock.data().quantity),Validators.min(1)]);
        let priceControl = new FormControl(stock.data().price,[Validators.required,Validators.min(1)]);
        this.changeableControls.addControl(stock.id,control);
        this.changeableControls.addControl(stock.id+"price",priceControl);
        this.stocks.push({...stock.data(),id:stock.id,stockQuantity:1,control:control,priceControl:priceControl});
      })
      this.calculateTotal();
      console.log(this.stocks);
    })
  }

  submit(){
    if(this.saleForm.valid){
      this.dataProvider.loading = true;
      let data = {
        ...this.saleForm.value,
        finalPrice:this.finalPrice,
        totalItems:this.totalItems,
        stocks:[],
        date:new Date()
      }
      this.selectedStocks.forEach((stock)=>{
        data.stocks.push({
          id:stock.id,
          name:stock.name,
          quantity:stock.control.value,
          price:stock.priceControl.value
        })
      })
      console.log(data);
      this.databaseService.addMultipartySales(data).then((data)=>{
        this.alertify.presentToast("Sale Added Successfully");
      }).catch((err)=>{
        this.alertify.presentToast("Error Occurred");
      }).finally(()=>{
        this.dataProvider.loading = false;
      })
    }
  }

  scanItem(){
    Camera.checkPermissions()
    .then(async (res) => {
      if (res) {
        const startScan = async () => {
          // Check camera permission
          // This is just a simple example, check out the better checks below
          await BarcodeScanner.checkPermission({ force: true });

          // make background of WebView transparent
          // note: if you are using ionic this might not be enough, check below
          (document.querySelector('app-root') as HTMLElement).style.display =
            'none';
          BarcodeScanner.hideBackground();
          const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
          // if the result has content
          if (result.hasContent) {
            alert(result.content);
            (document.querySelector('app-root') as HTMLElement).style.display = '';
            BarcodeScanner.showBackground();
            await BarcodeScanner.stopScan()
            await Haptics.impact({ style: ImpactStyle.Heavy });
            this.alertify.presentToast('Product Found');
          }
        };
        await startScan();
      }
    })
    .catch((err) => {
      console.log(err);
      Camera.requestPermissions().then((res) => {
        console.log(res);
      });
    });
  }

}
