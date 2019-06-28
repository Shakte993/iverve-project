import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewserviceService} from './newservice.service' ;
import {HttpClientModule} from '@angular/common/http';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { UpdateValueComponent } from './update-value/update-value.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import {MatCardModule,} from '@angular/material/card';
import {MatDividerModule, MatListModule} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 // import { JwtModule } from '@auth0/angular-jwt';
import { EventsModule } from 'angular4-events';

//  export function tokenGetter() {
//     return localStorage.getItem('access_token');
//    //return getToken('access_token');
//  }

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    WelcomepageComponent,
    SigninpageComponent,
    UpdateValueComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
      
    //     }
    //     }),
    EventsModule.forRoot()
  ],

  providers: [NewserviceService, AuthService, AuthGuard, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
