import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})

export class RegistrationformComponent implements OnInit {

  

list;
  data: object =  {};
  message: any;
  imagePath: any;
  imgURL: any;
  firstName: any;
  lastName: any;
  emailid: any;
  contact: any;
  id: number;
  password:any;


  name = 'Angular 4';
  url = '';

  preview(event) {
    if (event.target.files && event.target.files[0]) {

      var reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => { // called once readADataURL is completed

        this.imgURL = reader.result;

      }

    }

  } 

selectedFile: File;

  uploadImage(event: any) {
    this.selectedFile = event.target.file[0];  }

  constructor(private router: Router, public dataService: DataService) {  }

  ngOnInit() {

    // this.getStates();


  }

  newPage() {


      this.data = {
      "id" : this.id,
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "emailid" : this.emailid,
      "contact" : this.contact,
      "password" : this.password,
}

    console.log("ID is= "+ this.id);
     console.log("fname is= "+this.firstName);
     console.log("email is= "+ this.emailid);
     console.log("lname is= "+ this.lastName);
     console.log("contact is= "+ this.contact);
     console.log("contact is= "+ this.password);


     // console.log("new data is= "+this.data.contact);

      // console.log("contact is= " + JSON.stringify(this.data));

     console.log( "new value is " + JSON.stringify(this.data));

    this.dataService.createCustomer(this.data).subscribe((res:any)=> {
      this.list = res;
      alert("added succesfully");
  });

    //  this.router.navigate(['/welcomepage']);
  }







  
  // preview(files) {
  //   if (files.length === 0)
  //     return;

  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
 
  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     console.log('rgffgf',_event)
  //     this.imgURL = reader.result; 
  //   }
  // }

  

  welcome(){
    this.router.navigate(['/welcomepage']);

  }

}
