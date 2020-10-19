import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router ,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  //current url ,using NavigationEnd class of Router
  urlCur:string;
  constructor(private router: Router){
  console.log(router.url);
  router.events.pipe(
      filter(event  => event instanceof NavigationEnd )
    ).subscribe(event => 
   {
      this.urlCur = event.url;
   });
    
  }
  
}
