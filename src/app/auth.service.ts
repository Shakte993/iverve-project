import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})

  export class AuthService {

      constructor(private myRoute:Router, private helper: JwtHelperService) { }
    // constructor(private myRoute: Router) { }
       // GetToken Method 
    sendToken(token: string) {

     localStorage.setItem("access_token", token);
   }

getToken(): any {

   alert("get token method =>" +localStorage.getItem("access_token"));
  // return localStorage.getItem("access_token");
   const access_token = localStorage.getItem("access_token");
  //  localStorage.getItem("LoggedInUser");
   // const refreshToken = tokenGetter();
  // this.helper.isTokenExpired(refreshToken)
   return !this.helper.isTokenExpired(access_token);
    // return this.helper.decodeToken(access_token);
}

   isLoggedIn(): boolean {
    const access_token = localStorage.getItem("access_token");

    if(access_token)
    {
      alert("token exist");
      return true;
    }
    else
    {
      alert("no token present");
      return false;
    }
    // var x = this.getToken()  === null;
    // alert("is login method " + x);
    // return x;
    }

 logout() {
   localStorage.removeItem("access_token");
   localStorage.removeItem("useridnumber");

   this.myRoute.navigate(['/signin']);
 }
}
