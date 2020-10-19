import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  details_form : FormGroup;

  constructor(private _fb: FormBuilder){}

  ngOnInit(){
    this.details_form = this._fb.group({
      name: '',
      gender:'',
      email:''
    });
    this.details_form.valueChanges.subscribe(console.log);
  }
}



