import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule, MatListModule} from '@angular/material';


@NgModule({
     declarations: [
      AppComponent,
      RegistrationformComponent,
      WelcomepageComponent,
      UpdateprofileComponent,
      LoginpageComponent,
      DashboardComponent,
      HomepageComponent


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule
  ],

  providers: [DataService,AuthGuard,AuthService ],

  bootstrap: [AppComponent]
})

export class AppModule { }
