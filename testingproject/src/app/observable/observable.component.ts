import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Observable(observer =>{
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
    }).subscribe(value=>{
      console.log(value);
      
    }),error=>{
      console.log(error);
      
    }
  }
  }
  


