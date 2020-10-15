//Handles the routing of the project

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AccountsComponent } from './accounts';


const routes: Routes = [
  //landing page
  {path: '' , component : HomeComponent },
  {path: 'login' , component : LoginComponent },
  {path: 'accounts' , component : AccountsComponent },
  
  //otherwise redirect to home page
  {path: '**' , component : HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
