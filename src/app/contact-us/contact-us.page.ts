import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
  })
  
  constructor(public dataBase:DataBaseService,public router:Router,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() {
  }


  contactUs(){
    this.dataBase.contactUs(this.contactForm.value).then((res)=>{
      this.alertify.presentToast('We will Contact You Soon');
      this.router.navigateByUrl("/")
    })
  }

}
