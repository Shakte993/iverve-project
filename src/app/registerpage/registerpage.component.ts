import { Component, OnInit, Input } from '@angular/core';
import {NewserviceService} from '../newservice.service' ;
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  // @Input() public !LoggedInUser: boolean;
  list;
  list2;
  data: any;
  imgURL: any;
  firstname: any;
  lastname: any;
  emailId: any;
  phone: any;
address : any;
password : any;
deviceToken = '1234';
deviceType = '1';

id = 122;

  constructor(public newservice: NewserviceService, private router: Router, private auth: AuthService) { }
  
  newPage() {
    this.data = JSON.stringify({
    // "firstname" : this.firstname,
    // "lastname" : this.lastname,
    "emailId" : this.emailId,
    "password" : this.password,
    "deviceToken" :this.deviceToken,
    "deviceType" : this.deviceType,

    // "phone" : this.phone,
    // "address": this.address,
    // "image" : this.selectedFile,
});

  // let body = new FormData();
  // body.append("emailId",this.emailId);
  // body.append("password",this.password);
  // body.append("deviceToken",this.deviceToken);
  // body.append("deviceType",this.deviceType);


   console.log("email is= "+ this.emailId);
   console.log("password is= "+ this.password);
   console.log("deviceType= "+ this.deviceType );
   console.log("device token is = "+ this.deviceToken );

  //  console.log("image is= "+ this.selectedFile);
   


   // console.log("new data is= "+this.data.contact);

    // console.log("contact is= " + JSON.stringify(this.data));

   console.log( "new value is " + JSON.stringify(this.data));

  this.newservice.SignupMethodcall(this.data).subscribe((res:any)=> {

    console.log('12345666',res);
    
    this.list = res;

    if(this.list)
    {
      alert("registred successfully");
    }
    else 
    {
      alert("not registered");
}
});

// alert("added succesfully");
this.router.navigate(['/signin']);

  //  this.router.navigate(['/welcomepage']);
}

selectedFile: File;
  uploadImage(event: any) {
    this.selectedFile = event.target.file[0];  }

  ngOnInit() {
    if(this.auth.getToken()) {
      alert("Can not access registered page when already logged in");
       this.router.navigate(['/welcomepage']);
     }
    }



}
