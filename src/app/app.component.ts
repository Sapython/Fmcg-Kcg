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


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  loading:boolean = true;  
  public userId:any; 
  public userr: Observable<User | null> = EMPTY;
  
  public loggedInUserData: Subject<any> = new Subject();
  constructor(public dataProvider: DataProviderService, public fs: Firestore, public user:UserService,private router:Router, public auth: Auth,private platform: Platform) { 
    this.platform.backButton.subscribe(async (res:any)=>{
      // alert("back:"+this.router.url)
      if(this.router.url.startsWith('/stock-list')){
        (document.querySelector('app-root') as HTMLElement).style.display = 'block';
        BarcodeScanner.showBackground();
        await BarcodeScanner.stopScan()
      }
      window.history.back();
    })
  }
 
  ngOnInit() {
    this.loading=true;
    this.user.loggedInUserData.subscribe((value) => { 
      console.log('new', value)
      if(!value){
         this.router.navigateByUrl('/login')
         return this.loading=false;
      }
      collectionSnapshots(
        collection(this.fs, urls.users + value.uid + urls.cart)
      ).subscribe((dataChange) => {
        console.log('new', value.uid)
        console.log("Started listening to cart changes");
        let items: any = [];
        dataChange.forEach((doc: any) => {
          items.push({ ...doc.data() });
        });
        this.dataProvider.cartData = items;
        this.user.getUserData.subscribe((res) => {
          console.log(value.uid)
          this.getUser(value.uid) 
        });
        console.log("CartItems", items);
        this.loading=false;
        // this.router.navigate(['/homepage'])
      });
    });
    
  }

  private getUser(uid:any) {
    this.user.getUser(uid).then((res:any) => { this.dataProvider.user = res.data(); console.log(this.dataProvider.user)})
  }
}
