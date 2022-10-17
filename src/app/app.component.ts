import { Component } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { urls } from 'src/services/url';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public userId:any;
  constructor(public dataProvider: DataProviderService, public fs: Firestore, public user:UserService) { }

  ngOnInit() {
    
    console.log(this.user.loggedInUserData)
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

    
  }

  private getUser(uid:any) {
    this.user.getUser(uid).then((res) => { this.dataProvider.user = res.data(); })
  }
  
}
