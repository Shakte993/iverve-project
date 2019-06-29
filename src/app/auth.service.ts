import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token:string)
  {
    localStorage.setItem("myToken", token);
    console.log("Token recieved is " + token);
    
  }

  getToken() {
    console.log(localStorage.getItem("myToken"));
    return localStorage.getItem("myToken");

  }

  isLoggedIn()
  {

      // console.log("is loggedin method value" + this.getToken() ! == null);
      
    return this.getToken() ! == null;
  }

  logout() {
  
  localStorage.removeItem("myToken ");
  console.log(localStorage.removeItem("myToken removed"));
    this.myRoute.navigate(['/login']);
  }

}
