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

  constructor(private activatedRoute:ActivatedRoute,private dataProvider:DataProviderService,private router:Router,private alertify:AlertsAndNotificationsService) {
    this.activatedRoute.params.subscribe((params)=>{
      if (this.dataProvider.routeData.id != params.id){
        
        this.alertify.presentToast("Invalid sales record")
      }
    })
  }

  ngOnInit() {
  }

}
