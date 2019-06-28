import { Component, OnInit } from '@angular/core';
import {NewserviceService} from '../newservice.service' ;
import { AuthService } from '../auth.service';
import {EventsService} from 'angular4-events';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  idnumber: any; ;
   tokenid: any; ;
   data1: any;
   logoutid: any;
  // data1:object = {};
  // li:any[]=[];
  li: any;
user_id: any;
emailid:any;
firstname: string;
lastname : string ;
DOB : any ;
age:number;
gender : any;
feet : number;
inches : any;
weight : any ;
distanceunit : any ;
mealtype:any;
calorieunit : any ;
countryname : any;
countryid : number ;


  constructor(public newservice: NewserviceService, public auth: AuthService, private events: EventsService) { }


  logoutMethod() {
    // let userid = this.idnumber;

    this.logoutid = JSON.stringify({
      userId: this.idnumber,
      accessToken: this.tokenid,
    });

      // event = this.idnumber;
    this.newservice.logoutMethodCall(this.logoutid).subscribe((res: any) => {
          console.log('receve data is =>' , res);

          this.auth.logout();


      });
  }



  ngOnInit() {

      this.events.subscribe('PublishvalueKey').subscribe((from)=> {
      console.log("publish value is " , from);
    });

      this.tokenid = localStorage.getItem('access_token');
      console.log('Token id number is =>' + this.tokenid);

     this.idnumber = localStorage.getItem('useridnumber');
     console.log('userid number is ' + this.idnumber);


     this.showlist();
  }
      showlist() {
      this.data1 = JSON.stringify({
      userId: this.idnumber,
      accessToken: this.tokenid,

    });



    console.log('data value is ' + this.data1);

     // console.log("id number is =" + this.id);
    this.newservice.getUserProfileMethod(this.data1).subscribe((res: any) => {
      console.log('res value is ' , res);
      this.li = res.userData;
      this.user_id = this.li.userId;
      this.emailid = this.li.emailId;
      this.firstname = this.li.FirstName;
      this.lastname = this.li.LastName;
      this.DOB = this.li.Birthday ;
      this.age = this.li.Age;
      this.feet = this.li.Feet;
      this.inches = this.li.Inch;
      this.countryname = this.li.countryName ;
      this.distanceunit = this.li.distanceUnit ;
      this.mealtype = this.li.mealType;
      this.gender = this.li.Gender;
      this.calorieunit = this.li.caloryUnit;
      this.weight = this.li.Weight;
      this.countryid = this.li.countryId;


      console.log('list value is =>' , this.li.userId);
      console.log('list value is =>' , this.li);
    });


}

}
