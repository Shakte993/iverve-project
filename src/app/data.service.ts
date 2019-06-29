import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

// import { environment } from '../environments/environment';

// const API_URL = environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // apiURL = 'https://jsonplaceholder.typicode.com/comments';
  apiURL = 'http://localhost:3000/customers';
  //  api = "http://122.179.158.166/core/demoapp/register.php" ;

  constructor(private http: HttpClient) { }

  // fun(): Observable<any> {

  //   return this.http.get(this.apiURL);
  // }

  public createCustomer(data: any) {

    console.log('service method value is', data);

      // let mydata11:any = JSON.stringify({ "id":"6", "firstName":"parker","lastName":"smith","emailid":"smithp@gmail.com","contact":"9667874545"});
 
 const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }
    )};
     return this.http.post(`${this.apiURL}/`, data, httpOptions);

  }
     
  
  public getCustomers() {
      return this.http.get(`${this.apiURL}/`);
    }

// public updateCustomer(customer: Customer){}


public deleteCustomer(id: number) {
if (confirm("are you sure ?")) {
  return this.http.delete(`${this.apiURL}/${id}`);
}

}

// public Loginmethod(data: any) {

//   console.log( "Calling login method from service ");

//    return this.http.get(`${this.apiURL}/${data}`);
//  // return this.http.get(`${this.apiURL}/$`, data);
// }

public updateCustomer() {

alert ("calling update service");

   return this.http.get(`${this.apiURL}/`);

}

public updatecustomervalue(id: number, datavalue: any)
{
  alert("Callled update customer value method");

  
     return this.http.put(`${this.apiURL}/${id}`,datavalue);
}




}
