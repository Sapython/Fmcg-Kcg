import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/services/Auth/auth.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public signupForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    username: new FormControl(null, [Validators.required]),
  });

  constructor(
    public authservice: AuthService,
    private alertify: AlertsAndNotificationsService,
    private router: Router,
    private dataProvider:DataProviderService
  ) {}

  ngOnInit() {}

  signUpWithEmailAndPassword() {
    if (this.signupForm.valid) {
      this.dataProvider.loading = true;
      this.authservice.signUpWithEmailAndPassword(
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.username
      );
    }
  }
}
