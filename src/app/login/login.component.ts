import { Component,OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = this._fb.group({
      username: '',
      password:''
    });
    //this.login_form.valueChanges.subscribe(console.log);
  }
}