import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
name:any;
  transform(student:any,searchItem:any){
    if(!student|| !searchItem){
      return student;
    }
    return student.filter((emp:any)=>{
      return emp.age.toLowerCase().indexOf(searchItem.toLoweCase())  !== -1
    })
  }  

}
