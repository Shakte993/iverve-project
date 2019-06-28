import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

    baseApi = 'http://192.168.1.127/LJ/webservice/user';

  // api = "http://122.179.158.166/core/demoapp/register.php";

  //   Signupapi = "http://192.168.1.127/LJ/webservice/user/SignUp";

  //   Loginapi ="http://192.168.1.127/LJ/webservice/user/Login";

  //   Logoutapi = "http://192.168.1.127/LJ/webservice/user/Logout";

  //   getuserapi = "http://192.168.1.127/LJ/webservice/user/getUserProfile";

  //   usereditapi ="http://192.168.1.127/LJ/webservice/user/EditProfile";


  constructor(private http: HttpClient) { }

  public SignupMethodcall(data: any) {

        console.log('signup service method value is', data);

        const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

      // return this.http.post(this.Signupapi, data);
        return this.http.post(this.baseApi + '/SignUp', data );

  }

  public LoginMethodCall(data: any) {

      console.log('Login service method value is' + data);
      //  return this.http.post(this.Loginapi, data);
      return this.http.post(this.baseApi + '/Login', data);
 }

 public getUserProfileMethod(dataview: any) {
      //  let dataviewSend = JSON.stringify({"userId":dataview.userId})

    // alert("user profile method called value is =>" + dataview);

    return this.http.post(this.baseApi + '/getUserProfile', dataview);
      //    return this.http.post(`${this.getuserapi}`, dataview);
  }

  public editUserProfileMethod(dataview: any) {
    return this.http.post(this.baseApi + '/EditProfile', dataview);
    // return this.http.post(`${this.usereditapi}`, dataview);
  }

  public logoutMethodCall(x: any) {

     return this.http.post(this.baseApi + '/Logout', x);

 //  return this.http.post(`${this.Logoutapi}`, x);

  }

  public userPasswordchange(x: any) {

    return this.http.post(this.baseApi + '/changePin', x);
  }

}
