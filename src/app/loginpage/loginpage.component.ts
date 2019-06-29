import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router}  from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  signForm;
list:any;
  //list:any[]=[];
emailid : any;
password : any;
size;
int=0;
 data: object =  {};
//data: any;




  constructor(public dataservice: DataService,private router: Router, private auth: AuthService) { }

  // SigninMethod(emailid: any) {

    

  //   alert("email id is "+ emailid);
  //   this.dataservice.Loginmethod(emailid).subscribe((res:any)=> {
  //       this.list = res;
  //       console.log("data recieved is "+ this.list);

  //   });
  // }

  SigninMethod() {

/* USING LOGIN METHOD 

    this.data = {
      "emailid" : this.emailid,
      "password" : this.password,
}

console.log("login ngmodel value email id is =" + this.emailid);
console.log("login ngmodel value pasord id is =" + this.password);

this.dataservice.Loginmethod(this.data).subscribe((res:any)=> {

   console.log(res);
   this.list = JSON.stringify(res);
  console.log("email id is => " + this.emailid + " "+ "pwd is =>"+ this.password);
  
  


}); */


/* USING FOR LOOP TO FETCH RECORDS */

  this.dataservice.getCustomers().subscribe((res: any) => {
     console.log(res);
    this.list = res;
    
   
    console.log("showing datat list ",this.list);
   
   // alert(this.email+' '+this.passed)

    for(let i=0;i< this.list.length;i++)
    {
       
        if(this.emailid == this.list[i].emailid && this.password == this.list[i].password)
        {
          alert("Login Succesful");

          
         }

    }
 this.router.navigate(['/welcomepage']);

 this.auth.sendToken(this.emailid)

});


// if (this.signForm.valid) {
      
//   this.auth.sendToken(this.signForm.value.email)
//   this.router.navigate(["/welcomepage"]);
//   console.log("form value recieved is " + this.signForm.value);

// }
  


}

  ngOnInit() {}



}
