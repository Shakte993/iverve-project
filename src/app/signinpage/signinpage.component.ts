import { Component, OnInit } from '@angular/core';
import {NewserviceService} from '../newservice.service' ;
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import {AuthenticationService} from '../jwt services/authentication.service';
import {EventsService} from 'angular4-events';


@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent implements OnInit {

  emailId: any;
  password: any;
  data: any;
  deviceToken = '1234';
  deviceType = '1';
  loginVia = '0';
  view;
  idtoken;
  idno;
  data2: any;
  email;

constructor(public newservice: NewserviceService, private router: Router, private auth: AuthService, private authenticationService: AuthenticationService, private events:EventsService) { }

  // SigninMethod() {

  //  this.data2 = {
  //   emailId: this.emailId,
  //   password: this.password,
  //   deviceToken: this.deviceToken,
  //   deviceType: this.deviceType,
  //   loginVia : this.loginVia
  // };

  //  this.data = JSON.stringify({
  //         emailId: this.emailId,
  //         password: this.password,
  //         deviceToken: this.deviceToken,
  //         deviceType: this.deviceType,
  //         loginVia : this.loginVia
  //       });

  //  this.authenticationService.login(this.data2).subscribe (res => {
  //        console.log(res);
  //        this.view = res ;
  //        console.log('status value is ' + this.view);
  //        this.router.navigate(['/welcomepage']);

  //   //      if (this.view.status === 1) {
  //   //      alert('Login successfull ');
  //   //      console.log("useir id is " + this.view.userData.userId);
  //   //      this.idtoken = this.view.userData.accessToken;
  //   //       this.idno = this.view.userData.userId;
  //   //       this.email = this.view.userData.emailId;
  //   //       console.log('idtoken is =>' + this.email);
  //   //        // console.log('idtoken is =>' + this.idtoken);
  //   //       // console.log('idno is =>' + this.idno);
  //   //        // console.log("user id is =>" + JSON.stringify(this.idtoken));
  //   //       // console.log("skdnksjdnj+=>", );

  //   //       // localStorage.setItem('currentUser', this.email);



  //   //       // localStorage.setItem('useridnumber', this.idno);
  //   //       // this.auth.sendToken(this.idno);
  //   //   }
  //   //    else {
  //   //  alert('Inavalid credentials ');
  //   //  }

  //       });
//}



  SigninMethod()
  {
    this.data= JSON.stringify({
      "emailId": this.emailId,
      "password": this.password,
      "deviceToken": this.deviceToken,
      "deviceType": this.deviceType,
      "loginVia" : this.loginVia
    });

    this.newservice.LoginMethodCall(this.data).subscribe((res: any) => {
      console.log(res);
      this.view = res ;
      console.log("status value is " + this.view.status);

      if(this.view.status === 1)
        {
         alert("Login successfull ");
          // console.log("useir id is " + this.view.userData.userId);
          this.idtoken = this.view.userData.accessToken;
          this.idno = this.view.userData.userId;
          console.log(" access token is =>" + this.idtoken);
          console.log("idno is =>" + this.idno);
           // console.log("user id is =>" + JSON.stringify(this.idtoken));
        // localStorage.setItem("access_token", this.idtoken);
          localStorage.setItem("useridnumber", this.idno);
       // this.auth.sendToken(this.idno);
        this.auth.sendToken(this.idtoken);

          this.events.publish('PublishvalueKey', this.idno);

       this.router.navigate(['/welcomepage']);
      }

     else {
       alert("Inavalid credentials ");
     }


     alert ("Login Method call");


    });

  }

  ngOnInit() {
   //this.authenticationService.logout();


    if (this.auth.getToken()) {
     alert('Can not access login page when already logged in');
     this.router.navigate(['/welcomepage']);
    }
  }

}
