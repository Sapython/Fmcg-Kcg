import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { UserService } from 'src/services/User/user.service';
import {ActivatedRoute} from '@angular/router';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';


@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.page.html',
  styleUrls: ['./edit-stock.page.scss'],
})
export class EditStockPage implements OnInit {

  public stockId = this.router.snapshot.paramMap.get('id');
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
  
  constructor(private stock:StocksService, public user:UserService, public dataProvider:DataProviderService, public router:ActivatedRoute, public nav:Router,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() {
    this.getStock()
  }

  public editStock(){
    this.stock.editStock(this.stockId, this.editstockForm.value)
  }

  public getStock(){
    console.log(this.stockId)
    this.stock.getStock(this.stockId).then((res)=>{
      this.editstockForm.patchValue(res.data());
      this.alertify.presentToast('Stock updated Successfully');
      this.nav.navigateByUrl("/")
    })
  }
}
