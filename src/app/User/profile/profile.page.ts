import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userId: any;
  public updateUserForm: FormGroup = new FormGroup({
    displayName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    // photoURL: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  constructor(public dataProvider: DataProviderService, private userService: UserService,private router:Router,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() {
    this.updateUserForm.patchValue(this.dataProvider.user);
  }

  

  public updateUser() {
    console.log(this.updateUserForm.value)
    this.userService.updateUser(this.dataProvider.user["userId"], this.updateUserForm.value).then((res) => {
      this.alertify.presentToast('Profile Updated Successfully');
      this.router.navigateByUrl("/")
    })
  }


}
