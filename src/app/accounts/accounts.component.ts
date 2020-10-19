import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  deatilsForm : FormGroup;
  photoForm:FormGroup;
  
  date:Date = new Date();
  noChange:boolean = true;


  constructor(private _fb: FormBuilder){}

  ngOnInit(){
    this.deatilsForm = this._fb.group({
      name: '',
      gender:'',
      email:'',
      expiry_date:this.date
    });
    this.deatilsForm.valueChanges.subscribe(
      x => {
        this.noChange = false;
      } 
    );

    this.photoForm = this._fb.group({
      imageUrl:''
    });
    this.photoForm.valueChanges.subscribe(
      x=>{
        this.noChange=false;
      }

    )
    
  
  }

  Change(){
    this.noChange=false;
  }

  Submit(){
    this.noChange=true;
    this.ngOnInit();
  }  

  
  
}



