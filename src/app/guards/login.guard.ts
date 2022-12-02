import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/Auth/auth.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { UserService } from 'src/services/User/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router, public dataProvider:DataProviderService, public user:UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user.fetchedData){
        console.log("LOGINGUARD",this.dataProvider.LoggedInUser)
        if (this.dataProvider.LoggedInUser) {
          // this.router.navigate(['/root']);
          return false;
        }else{
          return true
        }   
      } else {
        this.router.navigate(['/loading']);
        return false
      }
  }
}
