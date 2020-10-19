import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router ,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  //current url ,using NavigationEnd class of Router
  urlCur:string;

  //will hold the event instance
  dataurl;


  constructor( router: Router){
  //console.log(router.url);
  //router has multiple exents and multiple layer of events, navEnd is the final one in the cycle
  //pipe for observable
  router.events.pipe(
      filter(event  => event instanceof NavigationEnd )
    ).subscribe(event => 
   {
      this.dataurl = event;
   });
  }

  //onint class
  ngOnInit(): void {
    //will hold the current url
    this.urlCur = this.dataurl.url;    
  }


}
