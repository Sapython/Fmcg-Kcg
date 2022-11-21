import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.page.html',
  styleUrls: ['./purchase-detail.page.scss'],
})
export class PurchaseDetailPage implements OnInit {
  purchaseData:any;
  
  constructor(private activatedRoute:ActivatedRoute,private databaseService:DataBaseService,private dataProvider:DataProviderService) {
    this.activatedRoute.params.subscribe((params) => {
      this.getPurchase(params.id)
    })
  }
  
  getPurchase(id:string){
    this.dataProvider.loading = true
    this.databaseService.getPurchase(id).then(async (data) => {
      if(data.exists()){
        let items = []
        let stocks = []
        this.purchaseData = {...data.data(),id:data.id}
        data.data().purchases.forEach((item) => {
          // items.push(item.split(''))
          item.items.forEach((item) => {
            items.push(item.split('|')[0])
            stocks.push(item.split('|')[1])
          })
        })
        let entries =[]
        console.log("items,stocks",items,stocks)
        for (const item of stocks) {
          console.log("ENTRY checker",entries,entries.find((value)=>{return value.id == item}))
          console.log("item bl",item)
          if(entries.find((value)=>{return value.id == item})==undefined){
            // alert("not found")
            let indexes = []
            stocks.forEach((item2,index2) => {
              if(item == item2){
                indexes.push(index2)
              }
            })
            let relatedItems = []
            indexes.forEach((item3) => {
              relatedItems.push(items[item3])
            })
            let stockData = await this.databaseService.getStock(item)
            entries.push({id:item,stock:stockData.data(),items:relatedItems})
          }
        }
        this.purchaseData.entries = entries
        console.log("this.purchaseData",this.purchaseData)
      } else {
        alert("Purchase not found")
      }
    }).catch((err) => {
      console.log(err)
      alert("Purchase Not found")
    }).finally(() => {
      this.dataProvider.loading = false
    })
  }

  ngOnInit() {

  }

}
