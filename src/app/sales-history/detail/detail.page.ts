import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  saleData:any[] = [];
  constructor(private activatedRoute:ActivatedRoute,private dataProvider:DataProviderService,private router:Router,private alertify:AlertsAndNotificationsService) {
    this.activatedRoute.params.subscribe((params)=>{
      if (this.dataProvider.routeData.id != params.id){
        this.alertify.presentToast("Invalid sales record")
        this.router.navigate(['/sales-history'])
      } else {
        this.getKeyValues()
      }
    })
  }

  ngOnInit() {
  }

  getKeyValues(){
    this.saleData = []
    Object.keys(this.dataProvider.routeData).sort().forEach((key)=>{
      this.saleData.push({key:key,value:this.dataProvider.routeData[key]})
    })
    console.log(this.saleData);
    
  }
}
