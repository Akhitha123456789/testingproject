import { Component, OnInit } from '@angular/core';
import { LaduService } from '../ladu.service';

@Component({
  selector: 'app-sanjai',
  templateUrl: './sanjai.component.html',
  styleUrls: ['./sanjai.component.css']
})
export class SanjaiComponent implements OnInit {
  mor;

  constructor(private niki:LaduService) { }

  ngOnInit(): void {
    this.mor=this.niki.empData;
  }
  

}
