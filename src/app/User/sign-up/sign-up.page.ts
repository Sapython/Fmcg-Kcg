import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/Auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public signupForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    username: new FormControl(),
  });

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  signUpWithEmailAndPassword() {
    if (this.signupForm.value.email == '') {
      alert('please enter your email');
      return;
    }
    if (this.signupForm.value.password == '') {
      alert('please enter your Password');
      return;
    }
    this.auth.signUpWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.username);

  }

}
