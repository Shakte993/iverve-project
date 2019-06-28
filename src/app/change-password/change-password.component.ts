import { Component, OnInit } from '@angular/core';
import {NewserviceService} from '../newservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  data1:any;
  changeForm;
  idnumber:any;
  tokenid:any;
  li:any;
  update_pwd_data:any;
  oldPassword:any;
  newPassword:any;

  constructor(private newservice: NewserviceService, private router: Router) { }

  ngOnInit() {
        this.tokenid = localStorage.getItem('tokenid');
        console.log('Token id number is =>' + this.tokenid);
        this.idnumber = localStorage.getItem('useridnumber');
        console.log('userid number is ' + this.idnumber);
        this.showList();
   }

    showList() {
      this.data1 = JSON.stringify({
        userId: this.idnumber,
          accessToken: this.tokenid,
          });
          console.log('data value is ' + this.data1);
          // tslint:disable-next-line: no-trailing-whitespace
          // tslint:disable-next-line: align
          this.newservice.getUserProfileMethod(this.data1).subscribe((res: any) => {
          // console.log('res value is ' , res);
          this.li = res.userData;
          console.log("data in change password is" , this.li);
        });
    }


    updatePassword() {
        this.update_pwd_data = JSON.stringify({
          "userId" : this.idnumber,
          "accessToken" : this.tokenid,
          "oldPassword" : this.oldPassword,
          "newPassword" : this.newPassword,
        });

        console.log("Update password data sent is =>", this.update_pwd_data);
        this.newservice.userPasswordchange(this.update_pwd_data).subscribe((res: any) => {
          console.log("response recived as =>", res);
          alert(res.message);
          this.li = res;
          if (res.status === 1) {
             this.router.navigate(['/signin']); } else {
            this.router.navigate(['/changepassword']); }
             },error=>{
               console.log(error);
         });
    }


}
