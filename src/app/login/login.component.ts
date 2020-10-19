import { Component,OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login_form : FormGroup;

  constructor(private _fb: FormBuilder){}

  ngOnInit(){
    this.login_form = this._fb.group({
      email: '',
      password:''

    });
    this.login_form.valueChanges.subscribe(console.log);
  }
}