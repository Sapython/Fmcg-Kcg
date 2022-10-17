import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

import QrCreator from 'qr-creator';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnInit {
  product:any;
  constructor(public dataProvider:DataProviderService,private activatedRoute:ActivatedRoute,private alertify:AlertsAndNotificationsService,private stokcService:StocksService) { }

  ngOnInit() {
    console.log(this.dataProvider.product)

    this.product=this.dataProvider.product
    this.activatedRoute.params.subscribe((res)=>{
      if(!this.dataProvider.product){
        if (res.productId){
          this.stokcService.getStock(res.productId).then((res)=>{
            this.product = res.data()
          }).finally(()=>{
            this.generateQr(res.productId)
          })
        } else {
          this.alertify.presentToast('No product found','error')
        }
      }
    })
  }
  print(){
    (document.querySelector('#qrCode') as HTMLElement)!.style.display = 'block'
    setTimeout(()=>{
      window.print()
    },300)
  }
  skip(){}
  editProduct(){}
  generateQr(id){
    QrCreator.render({
      text: id,
      radius: 0.1, // 0.0 to 0.5
      ecLevel: 'H', // L, M, Q, H
      fill: '#3880ff', // foreground color
      background: null, // color or null for transparent
      size: 200 // in pixels
    }, document.querySelector('#qrCode')!);
  }
}
