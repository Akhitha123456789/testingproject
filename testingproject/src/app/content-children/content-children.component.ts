import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrls: ['./content-children.component.css']
})
export class ContentChildrenComponent implements OnInit {
 @ViewChild('akhi') stor:ElementRef
// @ViewChildren('rajesh') raj:QueryList<any>
  constructor() { }

  ngOnInit(): void {
  }
   ngAfterViewInit(){
  // this.raj.forEach((emp)=>{
  //   emp.nativeElement.style.color="green"
  // })


     this.stor.nativeElement.style.color="green";
    
  }

}
