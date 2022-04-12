import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mounica',
  templateUrl: './mounica.component.html',
  styleUrls: ['./mounica.component.css']
})
export class MounicaComponent implements OnInit {
  public name="hii";
  result="passed";
  date=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
