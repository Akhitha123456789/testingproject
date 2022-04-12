import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  name="Akhitha";
  obj={'name':'keerti',
'age':'25'}
// imgUrl='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// imgalt='This is missing'
color='red';
   array=["kalyani","akhitha"]
  
  constructor() { }

  ngOnInit(): void {
  }

}
