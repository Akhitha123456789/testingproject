import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  data: any;

  constructor(private pen:ApiService) { }

  ngOnInit(): void {
    this.get()
   
  }

  get(){
   this.pen.getUsers().subscribe(res=> {
    //  console.log(res);  
     this.data =res;
   })
  }



  // add(){
  //   this.pen.postUsers().subscribe(res=> {
  //    //  console.log(res);  
  //     this.data =res;
  //   })
  //  }
}
