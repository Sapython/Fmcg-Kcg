import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: String = '';
  constructor(private navController: NavController,private router:Router) { }

  ngOnInit() {
    console.log(environment.projectName)
  }
  
  back(){
    this.navController.setDirection('back');
    const firstRoute = this.router.url;
    this.navController.pop()
    setTimeout(() => {
      console.log("navigated",firstRoute,this.router.url);
      if  (firstRoute == this.router.url){
        this.navController.navigateBack('root/homepage');
      }
    },10)
  }
}
