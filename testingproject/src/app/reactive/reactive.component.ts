import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  signInForm :FormGroup

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email:['']
    })
  }

}
