import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { User } from '@/_models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  Loginapi ='http://192.168.1.127/LJ/webservice/user/Login';

  // private currentUserSubject: BehaviorSubject<User>;
  private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: Observable<User>;
  public currentUser: Observable <any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.stringify(localStorage.getItem('currentUser')));
    // alert("value of usersubject" + this.currentUserSubject);
    // this.currentUser = this.currentUserSubject.asObservable();
       // alert("currentUser value is" + this.currentUser);
  }
  public get currentUserValue() {
    return this.currentUserSubject.value;
}

// login()
// {
//   return this.http.post<any>( this.Loginapi, { username, password })
//   .pipe(map(user => {
//     if(user && user.token) {

//       localStorage.setItem('currentUser', JSON.stringify(user));
//       this.currentUserSubject.next(user);
//     }
//     return user ;

//   }));
// }

  login(data: any) {
      console.log('jwt authservice method called value is ', data);
     //  console.log('jwt email id is =>' , data.emailId);
      // this.currentUserSubject.next(data.use);

       // console.log(" auth service ethod value =>", localStorage.getItem('currentUser'));

        // console.log("http value is " , this.http.post(this.Loginapi, data));

      return this.http.post(this.Loginapi, data).pipe(map(user => {

        const emailidvariable = user['userData']['emailId'];
        const tokenvariable = user['userData']['accessToken'];
        const userid = user['userData']['userId'];

          // console.log('user value is =>' , tokenvariable);
          // console.log("user id after login is =>", userid);
          

         // console.log('JWT email value is =>' ,JSON.stringify(user));
          // tslint:disable-next-line: no-trailing-whitespace
         
         if(emailidvariable) {
        // alert ("emailidvariable value is " + emailidvariable);
          // localStorage.setItem('currentUser',user['userData']['emailId']);
          localStorage.setItem('currentUser', emailidvariable);
          // tslint:disable-next-line: quotemark
          // tslint:disable-next-line: align
          // alert ("anskas=>" + this.currentUserSubject.next(emailidvariable));
          this.currentUserSubject.next(user);
          // tslint:disable-next-line: quotemark
          //  alert("service if condition called" + user['userData']['emailId']); 
        }
         return user;

       }));

       // console.log("akdam bakdam value is =>" , localStorage.getItem('currentUser'));

      }

    logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
