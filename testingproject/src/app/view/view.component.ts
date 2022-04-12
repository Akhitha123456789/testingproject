import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
@ViewChild ('hi')
hi:ElementRef;
  constructor() { }
  ngAfterViewInit():void{
    console.log(this.hi.nativeElement.innerHTML);
    
  }

  ngOnInit(): void {
  }

}
