import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { NonLoginComponent } from './nonlogin/nonlogin.component';
import { LoggedinComponent } from './loggedin/loggedin.component';

import { NavbarComponent } from './elements/navbar/navbar.component';

//MATERIAL UI IMPORTS
import {MatButtonModule} from '@angular/material/button';

//Module imports
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NonLoginComponent,
    AccountsComponent,
    HomeComponent,
    NavbarComponent,
    LoggedinComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
