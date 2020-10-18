//Handles the routing of the project
//bootstrap module
import { NgModule } from '@angular/core';

//router module
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NonLoginComponent } from './nonlogin';
import { AccountsComponent } from './accounts';
import { LoggedinComponent } from './loggedin';

const routes: Routes = [
  //landing page
  {
      path: '' , 
      component : HomeComponent 
  },
  
  {
    path: 'login' ,
    component : LoginComponent 
  },
  
  {
    path: 'accounts' ,
    component : AccountsComponent 
  },
  
  {
    path: 'nonlogin' ,
    component : NonLoginComponent 
  },
  
  {
    path: 'loggedin' ,
    component : LoggedinComponent 
  },
  
  //otherwise redirect to home page
  {path: '**' , component : HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
