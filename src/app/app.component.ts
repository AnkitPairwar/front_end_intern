import { Component } from '@angular/core';
//for observables

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'short-task';
 


  //will identify if the user is logged in or not
  login_status:boolean=false;
}
