import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { increment } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { arrayUnion } from '@firebase/firestore';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public stockId = '';
  public currentStockData: any;
  public transferModalOpen: boolean = false;
  public warehouses = [];
  saleModalOpen: boolean = false;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  billingForm:FormGroup = new FormGroup({
    customerName:new FormControl(''),
    customerPhone:new FormControl(''),
    customerAddress:new FormControl(''),
    customerEmail:new FormControl(''),
    customerGST:new FormControl(''),
    price:new FormControl(''),
    discount:new FormControl(''),
    tax:new FormControl(''),
  })
  mode:'full'|'partial' = 'full';
  constructor(
    private stock: StocksService,
    private user: UserService,
    public dataProvider: DataProviderService,
    private dataBase: DataBaseService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private alertify: AlertsAndNotificationsService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      // alert("Changed route "+params.id);
      this.stockId = params.id;
      if (this.stockId && this.dataProvider.purchaseId && this.dataProvider.purchaseProductId) {
        this.getPurchaseItem()
      } else if (this.stockId){
        this.getStock();
      }
    });
  }
  dataKeys: string[] = [];

  ngOnInit() {
    // this.getStock();
    this.getWarehouse();
  }

  getPurchaseItem(){
    this.dataBase.getPurchaseItem(this.dataProvider.purchaseId, this.dataProvider.purchaseProductId).then((res)=>{
      this.currentStockData = res.data();
      this.dataKeys = Object.keys(this.currentStockData);
      this.dataKeys.sort();
    })
  }

  getWarehouse() {
    this.dataBase.getWarehouses().then((data) => {
      this.warehouses = [];
      data.forEach((warehouse) => {
        this.warehouses.push({ ...warehouse.data(), id: warehouse.id });
      });
    });
  }

  public getStock() {
    console.log(this.stockId);
    this.stock.getStock(this.stockId).then((res) => {
      this.currentStockData = res.data();
      this.dataKeys = Object.keys(this.currentStockData);
      this.dataKeys.sort();
    });
  }

  transferItem() {}

  setWarehouse(warehouse) {
    if (this.dataProvider.purchaseProductId && this.dataProvider.purchaseId) {
      this.dataProvider.loading = true;
      this.dataBase.updatePurchaseItem(this.dataProvider.purchaseId, this.dataProvider.purchaseProductId, {
        warehouse: warehouse,
        date: new Date(),
        transferred: true,
      }).then((res) => {
        this.dataBase
        .updatePurchase(this.dataProvider.purchaseId, {
          transfers:arrayUnion({
            itemId: this.dataProvider.purchaseProductId,
            stockId: this.stockId,
            warehouse:warehouse,
            date: new Date(),
          }),
          warehouses:arrayUnion(warehouse.id),
          transferred: true,
        })
        .then((res) => {
          this.alertify.presentToast('Item transferred successfully');
          this.transferModalOpen = false;
        })
        .catch((err) => {
          this.alertify.presentToast('An error occured');
        }).finally(()=>{
          this.dataProvider.loading = false;
        });
      }).catch((err) => {
        this.alertify.presentToast('An error occured');
        this.dataProvider.loading = false;
      });
    }
  }

  sellItem(){
    this.dataProvider.loading = true;
    if (this.mode=='full'){
      this.dataBase.updatePurchaseItem(this.dataProvider.purchaseId, this.dataProvider.purchaseProductId, {
        sold: true,
        mode:this.mode,
      })
      this.dataBase.updatePurchase(this.dataProvider.purchaseId, {
        sales:arrayUnion(this.dataProvider.purchaseProductId)
      })
      this.dataBase.updateStock(this.stockId, {
        quantity:increment(-1)
      })
    }
    let data = {
      ...this.currentStockData,
      stockId:this.stockId,
      warehouse:this.currentStockData.warehouse,
      date:new Date(),
      sold:true,
      ...this.billingForm.value,
      mode:this.mode
    }
    this.dataBase.addSales(data).then((res)=>{
      this.alertify.presentToast('Item sold successfully');
      this.saleModalOpen = false;
      this.router.navigate(['/sales-history']);
    }).catch((err)=>{
      this.alertify.presentToast('An error occurred');
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }
  
  modeChanged(event:any){
    // this.router.navigate(['/sales-history']);
    console.log(event.detail.value);
    this.mode = event.detail.value;
  }
}
