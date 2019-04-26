import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { User }       from './../models/user.model';
import { Util } from './../helpers/util.helper';

@Injectable()
export class ApiGuard implements CanActivate {
  constructor(){}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(User.Auth()){
      if(route.data.roles && route.data.roles.indexOf(User.Role()) === -1) {
        //role not authorised so redirect to home page.
        Util.route('/login');
        return false;
      }

      return true;
    }else{
      Util.route('/login');
      return false;
    }
  }
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //     return this.userService.loggedIn();
  // }
}
