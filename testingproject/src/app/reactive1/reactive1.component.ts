import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrls: ['./reactive1.component.css']
})
export class Reactive1Component implements OnInit {
  loginForm:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
    email:['',[Validators.required,
    Validators.email]],

    password:['',[Validators.required,
    Validators.minLength(5)]]
    })
  }

    get f(){
      return this.loginForm.controls;
    }
    onsubmit(){
      console.log(this.loginForm.value);
      
    }
  }


