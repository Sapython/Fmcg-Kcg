import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { arrayUnion } from '@firebase/firestore';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  purchasedItems:any[] = []
  constructor(private activatedRoute:ActivatedRoute,private dataProvider:DataProviderService,private databaseSerivce:DataBaseService,private alertify:AlertsAndNotificationsService) {
    this.activatedRoute.params.subscribe((data)=>{
      if(data.warehouseId){
        alert("Warehouse id")
        if(this.dataProvider.routeData){
          alert("Route data: "+JSON.stringify(this.dataProvider.routeData))
          this.getMatchingPurchases(data.warehouseId)
          // this.databaseSerivce.getPurchases().then((data:any)=>{
          //   data.forEach((element:any) => {
          //     if(element.data().warehouse == undefined || element.data().warehouse.id == undefined || element.data().warehouse == ""){
          //       this.databaseSerivce.updatePurchase(element.id,{warehouses:arrayUnion(this.dataProvider.routeData.id),warehouse:this.dataProvider.routeData})
          //     } else {
          //       this.databaseSerivce.updatePurchase(element.id,{warehouses:arrayUnion(element.data().warehouse.id)})
          //     }
          //   });
          // })
        }
      }
    })
  }
  purchases:any[] = [];
  ngOnInit() {
    
  }

  getMatchingPurchases(warehouseId){

    function negativeAddition(data:any){
      
    }

    function positiveAddition(data:any){
      
    }

    this.dataProvider.loading = true;
    this.databaseSerivce.getMatchingWarehousePurchases(warehouseId).then((data:any)=>{
      this.purchases = [];
      this.purchasedItems = []
      data.forEach((element:any) => {
        this.purchases.push({...element.data(),id:element.id});
        if (element.data().warehouse.id == warehouseId) {
          negativeAddition(element)
        } else {
          positiveAddition(element)
        }
      });
      this.alertify.presentToast("Fetched purchases");
    }).catch(()=>{
      this.alertify.presentToast("Error fetching purchases",'error')
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }
}
