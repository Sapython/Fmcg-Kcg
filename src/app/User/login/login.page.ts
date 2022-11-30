import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/Auth/auth.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public auth: AuthService, private router:Router,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() { }

  loginWithEmail() {
    if (this.loginForm.value.email == '') {  return }
    if (this.loginForm.value.password == '') {  return }

    this.auth.loginWithEmailPassword(this.loginForm.value.email, this.loginForm.value.password)
  }

}
