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
    this.databaseService.getPurchase(id).then((data) => {
      if(data.exists()){
        this.purchaseData = {...data.data(),id:data.id}
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
