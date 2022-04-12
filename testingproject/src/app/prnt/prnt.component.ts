import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prnt',
  templateUrl: './prnt.component.html',
  styleUrls: ['./prnt.component.css']
})
export class PrntComponent implements OnInit {
  name="iam parent";

  constructor() { }

  ngOnInit(): void {
  }

}
