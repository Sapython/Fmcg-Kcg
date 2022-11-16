import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/services/dataBase/data-base.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.page.html',
  styleUrls: ['./purchases.page.scss'],
})
export class PurchasesPage implements OnInit {
  purchases: any[] = []
  constructor(private databaseService:DataBaseService) { }

  ngOnInit() {
    this.databaseService.getPurchases().then((data) => {
      data.forEach((purchase:any) => {
        let purchaseData = {...purchase.data(),id:purchase.id}
        let items = []
        let stocks = []
        purchaseData.purchases.forEach((element) => {
          items.push(...element.items)
          element.items.forEach((item) => {
            if(!stocks.includes(item.split('|')[1])){
              stocks.push(item.split('|')[1])
            }
          })
        });
        purchaseData.items = items
        purchaseData.stocks = stocks
        this.purchases.push(purchaseData)
      })
    })
  }

  seePurchase(){

  }

  deletePurchase(){

  }

}
