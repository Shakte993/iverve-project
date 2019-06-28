import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { UpdateValueComponent } from './update-value/update-value.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';



const routes: Routes = [
  {path: '', component : RegisterpageComponent, },
  {path : 'welcomepage', component: WelcomepageComponent , canActivate: [AuthGuard] },
  {path : 'signin', component: SigninpageComponent},
  {path: 'signup', component:RegisterpageComponent,canActivate: [AuthGuard]},
  {path: 'update', component:UpdateValueComponent,canActivate:[AuthGuard] },
  {path: 'changepassword' , component:ChangePasswordComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
