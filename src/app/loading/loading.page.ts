import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor(private user:UserService,private router:Router) {
    this.user.loggedInUserData.subscribe((data:any)=>{
      console.log("LOADING",data)
      if(data){
        this.router.navigate(['./root'])
      } else {
        this.router.navigate(['./login'])
      }
    })
  }

  ngOnInit() {
  }

}
