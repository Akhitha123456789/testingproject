import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chld',
  templateUrl: './chld.component.html',
  styleUrls: ['./chld.component.css']
})
export class ChldComponent implements OnInit {
@Input() public parent;
  constructor() { }

  ngOnInit(): void {
  }

}
