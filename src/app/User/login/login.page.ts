import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/Auth/auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  loginWithEmail() {
    if (this.loginForm.value.email == '') { alert('please enter your email'); return; }
    if (this.loginForm.value.password == '') { alert('please enter your Password'); return; }

    this.auth.loginWithEmailPassword(this.loginForm.value.email, this.loginForm.value.password).then((res) => { console.log(res); }).catch((err) => { console.log(err); });
  }

}
