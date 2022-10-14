import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { UserService } from 'src/services/User/user.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.page.html',
  styleUrls: ['./edit-stock.page.scss'],
})
export class EditStockPage implements OnInit {

  public stockId = this.router.snapshot.paramMap.get('id');
  public currentStockData : any 
  public userId:any;
  public editstockForm: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Quality: new FormControl(''),
    Shade: new FormControl(''),
    Backing: new FormControl(''),
    Length: new FormControl(''),
    Width: new FormControl(''),
    Thickness: new FormControl(''),
    Quantity: new FormControl(''),
    StorageLocation: new FormControl(''),
    Price: new FormControl('')
  });
  url:any;
  
  constructor(private stock:StocksService, public user:UserService, public dataProvider:DataProviderService, public router:ActivatedRoute) { }

  ngOnInit() {
    this.getStock()
    return this.user.getUserData.subscribe((res) => {
      this.userId = res?.uid; this.getUser()
    });
  }

  private getUser() {
    this.user.getUser(this.userId).then((res) => { this.dataProvider.user = res.data(); })
  }

  public editStock(){
    this.stock.editStock(this.stockId, this.editstockForm.value)
  }

  public getStock(){
    console.log(this.stockId)
    this.stock.getStock(this.stockId).then((res)=>{
      this.currentStockData = res.data();

    })
  }
}
