import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { NonLoginComponent } from './nonlogin/nonlogin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './elements/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NonLoginComponent,
    AccountsComponent,
    HomeComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
