import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StocksService } from 'src/services/Stock/stocks.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  public currentStockData:any
  public stockId = this.router.snapshot.paramMap.get('id');

  public addstockForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl(''),
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
    id: new FormControl(''),
    img: new FormControl(''),
  });
  
  constructor(public router:ActivatedRoute, public stock:StocksService) { }

  ngOnInit() {
    this.getStock()
  }

  public billing(){
    
  }

  public getStock(){
    console.log(this.stockId)
    this.stock.getStock(this.stockId).then((res)=>{
      this.currentStockData = res.data();

    })
  }

}
