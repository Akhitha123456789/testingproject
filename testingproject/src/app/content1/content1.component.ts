import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit ,AfterContentInit{
  //  @ContentChild('akhi') stor:ElementRef;


  @ContentChildren('akhi') tests:QueryList<any>
  
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit():void{
         this.tests.forEach((res)=>{
           res.nativeElement.style.color="red"
         })


    // this.stor.nativeElement.style.color="red";//content child

    
    
   }

}
