import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})

export class LoggedinComponent {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  temperature:number;
  windSpeed:number;
  humidity:number;
  airQuality:number;
  json_file;
  url:string = "http://api.openweathermap.org/data/2.5/weather?q=Dhanbad&appid=e9cf4754614d3e4feffcfe04d5ff9956";


  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise()
    .then(data =>
      {
        this.json_file = data;
      //  this.airQuality;
        //+ is for typecasting
        this.temperature = +(this.json_file['main'].temp - 273.15).toPrecision(3);
        this.windSpeed = this.json_file['wind'].speed;
        this.humidity = this.json_file['main'].humidity;
        
    
      });

      
    }
}