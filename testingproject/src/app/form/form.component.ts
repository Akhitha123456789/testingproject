import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: any;

  constructor(private fb:FormBuilder, private krish:ApiService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      username:[''],
      password:['']
    })
  }
  onSubmit(){
    // console.log(this.form.value);
    this.krish.postUsers(this.form.value).subscribe(res=> {
    console.log(res);

    })
    
  }

}
