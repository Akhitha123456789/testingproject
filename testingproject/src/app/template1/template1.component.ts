import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  console.log(form);
  console.log(form.value);
  
  
  
  
}
}
