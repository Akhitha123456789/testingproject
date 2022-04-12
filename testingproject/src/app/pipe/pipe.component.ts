import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
employees:any
searchItem:any

  constructor() { }

  ngOnInit(): void {

    
  }
  empData=[
    {
      city:"hyderabad",
      age:24
    },
    {
      city:"kerala",
      age:25
    }
  ]

}
