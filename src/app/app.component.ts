import { Component, OnInit } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { Firestore, collectionSnapshots, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EMPTY, Observable, Subject } from 'rxjs';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { urls } from 'src/services/url';
import { UserService } from 'src/services/User/user.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(public dataProvider: DataProviderService, public fs: Firestore, public user:UserService,private router:Router, public auth: Auth,private platform: Platform) { 
    if(platform.is('capacitor')){
      Camera.checkPermissions().then((res)=>{
        res.camera === 'prompt' ? Camera.requestPermissions({permissions:['camera','photos']}) : null
      })
    }
   
    GoogleAuth.initialize({
      clientId: '690627613189-fglnifb9ggsg8qgrb1s17otedqhfm08h.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });


    this.platform.backButton.subscribe(async (res:any)=>{
      if(this.router.url.startsWith('/stock-list') || this.router.url.startsWith('/root/homepage')){
        (document.querySelector('app-root') as HTMLElement).style.display = 'block';
        BarcodeScanner.showBackground();
        await BarcodeScanner.stopScan()
      }
      window.history.back();
    })
    this.dataProvider.loading=true;
    this.user.loggedInUserData.subscribe((data:any)=>{
      console.log("LOADING",data)
      if(data){
        this.router.navigate(['./root'])
      } else {
        this.router.navigate(['./login'])
      }
      this.dataProvider.loading=false;
    })
  }

}
