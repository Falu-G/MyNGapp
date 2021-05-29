import { Injectable } from '@angular/core';
// import { AuthService } from './../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth-service.service"
import { Router } from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor( public authService:AuthService, public router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if( this.authService.isLoggedIn !== true ){
      this.router.navigate(['login'])
    }

    return true;
  }
  
}
