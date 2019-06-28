import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';
import {AuthenticationService} from './jwt services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authenticationService: AuthenticationService,private myRoute: Router, public authservice:AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const currentUser = this.authenticationService.currentUserValue;
      const currentUser = this.authservice.getToken();
     
      if (!this.authservice.getToken()) {
        this.myRoute.navigate(['/signin']);
        return false;
      }
      return true;
    
   
    }
  
}
