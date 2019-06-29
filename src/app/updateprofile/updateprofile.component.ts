import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import {ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  data: Object = {};
  id:number;
  list;
  products = [];
  datavalue:object = {};

  constructor(private router: Router,public dataservice: DataService, public location: Location, private route: ActivatedRoute, private http: HttpClient) { }

  updateprofiledata(data) {
    this.datavalue = {

      "id" : data.id,
     "firstName" :data.firstName,
      "lastName" : data.lastName,
      "emailid" : data.emailid,
      "contact" : data.contact,

    }
      console.log("fistName is " + data.firstName);
      
      console.log("contact is= "+ JSON.stringify(data));

      
      this.dataservice.updatecustomervalue(this.id, this.datavalue).subscribe((res:any)=> {
      
        this.list = res;
        console.log("updated vlaue is " + this.list);
        
        alert("Records Updated successfuly !!");

        this.router.navigate(['/welcomepage']);

      // const url = `${"http://localhost:3000/customers"}/${this.id}`;


      });

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('cccc ', this.id);
    });

    this.dataservice.updateCustomer().subscribe((res: any) => {

      this.products = res;
      for(var i= 0; i<this.products.length; i++)
      {
        if(parseInt(this.products[i].id) === this.id)
        {
            this.data = this.products[i];
            break;
        }
      }


    });
    // this.http.get("http://localhost:3000/customers").subscribe(
    //   (res: any) => {
    //     this.products = res;
    //     for(var i = 0; i < this.products.length ; i++) {
    //       if(parseInt(this.products[i].id) === this.id) {
    //         // this.exist = true;
    //         this.data = this.products[i];
    //         break;
    //       } else {
    //         // this.exist = false;
    //       }
    //     }
    //   }
    // )
  }

     

}