import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhana',
  templateUrl: './dhana.component.html',
  styleUrls: ['./dhana.component.css']
})
export class DhanaComponent implements OnInit {
  name="kalyani";

  constructor() { }

  ngOnInit(): void {
  }
  username(){
    return "welcome to:"+this.name
  }
  obj={
    name:"kalyani",
    age:25
  }

}
