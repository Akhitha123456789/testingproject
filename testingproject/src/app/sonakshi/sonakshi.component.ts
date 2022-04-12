import { Component, OnInit } from '@angular/core';
import { OdsService } from '../ods.service';

@Component({
  selector: 'app-sonakshi',
  templateUrl: './sonakshi.component.html',
  styleUrls: ['./sonakshi.component.css']
})
export class SonakshiComponent implements OnInit {

  constructor(private data : OdsService) { }

  ngOnInit(): void {
  }
  createFunction(){
    this.data.createObservable().subscribe((res)=>{
console.log(res);

    })
  }
}
