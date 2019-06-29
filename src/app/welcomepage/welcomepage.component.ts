import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import  { AuthService } from '../auth.service';





@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {


  list;
  list2;

  

  // constructor( public dataservice: DataService, public customer: Customer, private activeroute: ActivatedRoute) { }
  constructor( public dataservice: DataService,public auth:AuthService) { }

  
 
  // console.log(this.router.url);
  
  
  deletecustomer(id: any) {

    console.log(id);
    
  this.dataservice.deleteCustomer(id).subscribe((res:any)=> {
     console.log(res);
    alert("deleted succesfully");
    this.shoelist();

  });

}

  ngOnInit() {

    this.shoelist();

    }


    shoelist() {
      this.dataservice.getCustomers().subscribe((res: any) => {
        console.log(res);
        this.list = res;
        this.list2 = res;



      });

    }

}
