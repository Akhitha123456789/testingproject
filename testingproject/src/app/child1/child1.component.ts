import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output()
  childEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  childInput(event:any){
    this.childEvent.emit(event.target.value)
  }
}
