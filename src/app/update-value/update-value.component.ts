import { Component, OnInit } from '@angular/core';
import {NewserviceService} from '../newservice.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';
// import { Alert } from 'selenium-webdriver';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-update-value',
  templateUrl: './update-value.component.html',
  styleUrls: ['./update-value.component.css']
})
export class UpdateValueComponent implements OnInit {

  idnumber;
  tokenid;
  list: any;
  data1: any;
  li: any;
  userId;
  emailId;
  updatedate;
  Birthday;
   Gender: any;
  datearr: any;
  dateformat: any;
  formattedDate: any;
  newdateformatted:any;
  age_format:any;


   constructor(public newservice: NewserviceService, private router: Router, public datepipe: DatePipe,) { }

   ngOnInit() {

       this.tokenid = localStorage.getItem('access_token');
       console.log(' access Token is =>' + this.tokenid);

       this.idnumber = localStorage.getItem('useridnumber');
       console.log('userid is ' + this.idnumber);

       this.showlist();


      }

      getToday(): string {
        return new Date().toISOString().split('T')[0];
     }

      datechangeMethod() {

        const myDate = this.dateformat;
          let now = new Date();
          const format = 'yyyy';
        // const format = 'dd/MM/yyyy' ;
        //const myDate = '2019-06-29';
        const locale = 'en-US';
        this.formattedDate = formatDate(now, format,locale);
        this.newdateformatted = formatDate(myDate,format,locale);
        console.log("formatted date value is" + this.formattedDate);
        console.log("api date format is " + this.newdateformatted);
        // this.age_format = this.formattedDate - this.newdateformatted;
        this.li.Age = this.formattedDate - this.newdateformatted;
         console.log("finding the age is " + this.age_format);

      }

  updateProfile() {

        this.updatedate = JSON.stringify({
          userId : this.idnumber,
          accessToken : this.tokenid,
          FirstName : this.li.FirstName,
          LastName : this.li.LastName,
          Birthday : this.dateformat,
          Gender: this.li.Gender,
          Age : this.li.Age,
          Weight  : this.li.Weight,
          Feet : this.li.Feet,
          Inch : this.li.Inch,
          mealType: this.li.mealType,
          distanceUnit: this.li.distanceUnit,
          caloryUnit: this.li.caloryUnit,
          countryId: this.li.countryId,
          loginVia : '0',
        });
        console.log('updated value is =>' + this.updatedate);
        alert ('gender value' + this.li.Gender);
          // alert("curent bday is " + this.li.Birthday);
          //  this.datepipe.transform(this.li.Birthday, 'yyyy-MM-dd'); //whatever format you need.
           // alert("ne bday value is " + this.li.Birthday);
        this.newservice.editUserProfileMethod(this.updatedate).subscribe((res: any) => {
          console.log('reponse value is', res);
          alert(res.message);
          if (res.status === 1) {
            this.router.navigate(['/welcomepage']); }

          });

            }





  showlist() {
      this.data1 = JSON.stringify({
        userId: this.idnumber,
          accessToken: this.tokenid,
          });
      console.log('data value is ' + this.data1);
          // tslint:disable-next-line: no-trailing-whitespace
         // tslint:disable-next-line: align
    this.newservice.getUserProfileMethod(this.data1).subscribe((res: any) => {
      this.li = res.userData;
        if (this.li.Gender == 'Male') {
          this.li.Gender = '0'; } else {
          this.li.Gender = '1';
          }

            console.log("api age is" + this.li.Age);

           // tslint:disable-next-line: whitespace
      this.datearr = this.li.Birthday.split('-'); // dd-mm-yyyy
          // tslint:disable-next-line: whitespace
      const dateformat =   this.datearr[2] + '-' + this.datearr[1] + '-' + this.datearr[0] ;
      this.dateformat = dateformat.toString();

      console.log("date value is" + this.dateformat); 


        // tslint:disable-next-line: comment-format
          //alert('after format value is ' + this.dateformat);
          // this.userId = this.li.userId;
      console.log('list value is =>' , this.li);
   });


}
}
