import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';






const routes: Routes = [
  // { path: '',   redirectTo: 'registrationform', pathMatch: 'full' },
  {path : '', component: HomepageComponent, canActivate: [AuthGuard] },
  {path: 'welcomepage' , component: WelcomepageComponent,  canActivate:[AuthGuard]},
  {path: 'register' , component: RegistrationformComponent,canActivate:[AuthGuard]},
  {path: 'update/:id', component: UpdateprofileComponent,canActivate:[AuthGuard]},
  {path :'login', component:LoginpageComponent},
  {path :'dashboard',component:DashboardComponent, canActivate:[AuthGuard] },
  {path:'home', component:HomepageComponent},
  
  // {path: 'update', component: UpdateprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
