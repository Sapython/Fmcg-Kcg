import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  public currentStockData:any
  public stockId = this.router.snapshot.paramMap.get('id');
  public numberOfPieces:any;
  public billingForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    vendorId:new FormControl(''),
    vendorName: new FormControl(''),
    vendorEmail: new FormControl(''),
    useraddress: new FormControl(''),
    Name: new FormControl(''),
    Quality: new FormControl(''),
    Shade: new FormControl(''),
    Backing: new FormControl(''),
    Length: new FormControl(''),
    Width: new FormControl(''),
    Thickness: new FormControl(''),
    Quantity: new FormControl(''),
    StorageLocation: new FormControl(''),
    Price: new FormControl(''),
    productId: new FormControl(''),
    img: new FormControl(''),
    numberOfPieces:new FormControl('')
    
  });
  
  constructor(public router:ActivatedRoute, public stock:StocksService, public dataBase:DataBaseService, public user: UserService, public dataProvider:DataProviderService, private nav:Router) { }

  ngOnInit() {
    this.getStock()
  }


  public billing(){
    this.billingForm.value['vendorId'] = this.dataProvider?.user?.userId;
    this.billingForm.value['vendorName'] = this.dataProvider?.user?.displayName;
    this.billingForm.value['vendorEmail'] = this.dataProvider?.user?.email;
    this.billingForm.value['Name'] = this.currentStockData?.Name;
    this.billingForm.value['img'] = this.currentStockData?.img;
    this.billingForm.value['Price'] = this.currentStockData?.Price;
    this.billingForm.value['Quality'] = this.currentStockData?.Quality;
    this.billingForm.value['Shade'] = this.currentStockData?.Shade;
    this.billingForm.value['Backing'] = this.currentStockData?.Backing;
    this.billingForm.value['Length'] = this.currentStockData?.Length;
    this.billingForm.value['Quantity'] = this.currentStockData?.Quantity;
    this.billingForm.value['StorageLocation'] = this.currentStockData?.StorageLocation;
    this.billingForm.value['Width'] = this.currentStockData?.Width;
    this.billingForm.value['productId'] = this.currentStockData?.id;
    this.billingForm.value['numberOfPieces'] = this.numberOfPieces;


    if(this.dataProvider.user){
      this.dataBase.billing(this.dataProvider.user["userId"], this.billingForm.value).then((res)=>{
        this.nav.navigateByUrl("/order-place")
      });
    }
  }

  public getStock(){
    this.stock.getStock(this.stockId).then((res)=>{
      this.currentStockData = res.data();
    })
  }

}
