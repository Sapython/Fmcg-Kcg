import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
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

  constructor(public dataProvider: DataProviderService, private userService: UserService) { }

  ngOnInit() {
    return this.userService.getUserData.subscribe((res) => {
      this.userId = res?.uid; this.getUser();
    });
  }

  private getUser() {
    this.userService.getUser(this.userId).then((res) => { this.dataProvider.user = res.data(); });
  }

  public updateUser() {
    console.log(this.updateUserForm.value);
    this.userService.updateUser(this.userId, this.updateUserForm.value).then((res) => {
      console.log(res);
    });
  }


}
