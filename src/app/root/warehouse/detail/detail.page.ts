import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { arrayUnion } from '@firebase/firestore';
import { element } from 'protractor';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  purchasedItems: any[] = [];
  finalPurchases: any[] = [];
  stocksBackup:any[] = []
  counters: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    public dataProvider: DataProviderService,
    private databaseService: DataBaseService,
    private alertify: AlertsAndNotificationsService,
    private router:Router
  ) {
    this.activatedRoute.params.subscribe((data) => {
      if (data.warehouseId) {
        // alert('Warehouse id');
        if (this.dataProvider.routeData) {
          this.dataProvider.routeData.id = data.warehouseId;
          // alert('Route data: ' + JSON.stringify(this.dataProvider.routeData));
          this.getMatchingPurchases(data.warehouseId);
          // this.databaseSerivce.getPurchases().then((data:any)=>{
          //   data.forEach((element:any) => {
          //     if(element.data().warehouse == undefined || element.data().warehouse.id == undefined || element.data().warehouse == ""){
          //       this.databaseSerivce.updatePurchase(element.id,{warehouses:arrayUnion(this.dataProvider.routeData.id),warehouse:this.dataProvider.routeData})
          //     } else {
          //       this.databaseSerivce.updatePurchase(element.id,{warehouses:arrayUnion(element.data().warehouse.id)})
          //     }
          //   });
          // })
        } else {
          this.alertify.presentToast('Error loading data', 'error');
        }
      }
    });
  }
  purchases: any[] = [];
  ngOnInit() {}

  async negativeAddition(data: any) {
    let restiveData = [];
    let items = await this.databaseService.getPurchaseItems(data.id);
    items.forEach((element: any) => {
      if (!data.warehouses.includes(element.id)) {
        restiveData.push({ ...element.data(), id: element.id });
      }
    });
    return restiveData;
  }

  async positiveAddition(data: any) {
    let restiveData = [];
    let items = await this.databaseService.getPurchaseItems(data.id);
    items.forEach((element: any) => {
      if (!data.warehouses.includes(element.id)) {
        restiveData.push({ ...element.data(), id: element.id });
      }
    });
    return restiveData;
  }

  async getMatchingPurchases(warehouseId) {
    this.dataProvider.loading = true;
    let stocks = await this.databaseService.getStocks()
    this.stocksBackup = []
    stocks.docs.forEach((element:any) => {
      this.stocksBackup.push({id:element.id,...element.data()})
    })
    this.databaseService
      .getMatchingWarehousePurchases(warehouseId)
      .then(async (data) => {
        this.purchases = [];
        this.purchasedItems = [];
        this.finalPurchases = [];
        console.log('length', data.docs.length);
        for (var purchase of data.docs) {
          let items = []
          let stocks = []
          let stocksData = []
          let purchaseData:any = {...purchase.data(),id:purchase.id}
          if (purchaseData.warehouse.id==warehouseId){
            purchase.data().purchases.forEach((item) => {
              for (const itemData of item.items) {
                let data = purchase.data().transfers?.reduce((data)=>{
                  return data.itemId == itemData.split('|')[0] && data.warehouseId != warehouseId
                })
                console.log("BABA",data)
                if (data){
                  console.log(
                    "Continued"
                  )
                  continue
                }
                items.push(itemData.split('|')[0])
                stocks.push(itemData.split('|')[1])
              }
            })
            let entries =[]
            console.log("items,stocks",items,stocks)
            for (const item of stocks) {
              console.log("ENTRY checker",entries,entries.find((value)=>{return value.id == item}))
              console.log("item bl",item)
              let stockData = this.stocksBackup.find((value)=>{return value.id == item})
              stocksData.push(stockData)
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
                // console.log("REFID",item,this.stocksBackup)
                entries.push({id:item,stock:stockData,relatedItems:relatedItems})
              }
            }
            purchaseData.entries = entries
            console.log("this.purchaseData",purchaseData)
            this.purchases.push(purchaseData);
            console.log('this.purchases', this.purchases);
          }
          // add only if not in finalPurchases
          if (!this.finalPurchases.find((element) => element.id == purchase.id)) {
            this.finalPurchases.push({
              id: purchase.id,
              items: items,
              stocks: stocks,
              stocksData: stocksData,
            })
          }
        }
        let counters = []
        this.finalPurchases.forEach((element) => {
          element.items.forEach((item,index) => {
            if (counters.find((value) => value.id == element.stocks[index]) == undefined) {
              counters.push({ id: element.stocks[index], count: 1, items: [item], stocksData: element.stocksData[index] })
            } else {
              counters.find((value) => value.id == element.stocks[index]).count++
              counters.find((value) => value.id == element.stocks[index]).items.push(item)
            }
          })
        })
        console.log("counters",counters)
        this.counters = counters
        this.alertify.presentToast('Fetched purchases');
      })
      .catch(() => {
        this.alertify.presentToast('Error fetching purchases', 'error');
      })
      .finally(() => {
        this.dataProvider.loading = false;
      });
  }

  deleteWarehouse(){
    if(confirm("Are you sure you want to delete this warehouse?")){
      this.dataProvider.loading = true
      this.databaseService.deleteWarehouse(this.dataProvider.routeData.id).then(()=>{
        this.alertify.presentToast("Deleted")
        this.router.navigate(["root/warehouses"])
      }).catch(()=>{
        this.alertify.presentToast("Error deleting","error")
      }).finally(()=>{
        this.dataProvider.loading = false
      })
    }
  }
}
