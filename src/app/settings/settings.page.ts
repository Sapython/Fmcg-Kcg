import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/services/Auth/auth.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  result: string;
  constructor(public dataprovider:DataProviderService, private actionSheetCtrl: ActionSheetController, private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }
  async logoutPopUp() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are Sure You want Logout',
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler : () => {
            this.logout()
            
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'user',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

}
