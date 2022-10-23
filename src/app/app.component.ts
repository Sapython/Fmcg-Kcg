import { Component, OnInit } from '@angular/core';
import { Firestore, collectionSnapshots, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { urls } from 'src/services/url';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public userId:any; 
  constructor(public dataProvider: DataProviderService, public fs: Firestore, public user:UserService,private router:Router) { }
 
  ngOnInit() {
    console.log(this.user.loggedInUserData)
    if (this.dataProvider.LoggedInUser){
      this.router.navigate(['/homepage'])
      this.user.loggedInUserData.subscribe((value) => { 
        collectionSnapshots(
          collection(this.fs, urls.users + value.uid + urls.cart)
        ).subscribe((dataChange) => {
          console.log("Started listening to cart changes");
          let items: any = [];
          dataChange.forEach((doc: any) => {
            items.push({ ...doc.data() });
          });
          this.dataProvider.cartData = items;
          this.user.getUserData.subscribe((res) => {this.getUser(value.uid) });
          console.log("CartItems", items);
        });
      });
    } else {
      this.router.navigate(['/get-started'])
    }
  }

  private getUser(uid:any) {
    this.user.getUser(uid).then((res) => { this.dataProvider.user = res.data(); })
  }
}
