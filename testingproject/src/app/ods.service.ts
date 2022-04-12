import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdsService {

  constructor() { }
  createObservable(){
 return new Observable((observer)=>{
   let a = 20;
   setInterval(()=>{
console.log(a);

   },1000)

})    
  }
}
