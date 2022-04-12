import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'akitha'
})
export class AkithaPipe implements PipeTransform {
  transform(employees,searchItem) {
    if(!employees || !searchItem){
      return employees;
    }
    return employees.filter((emp)=>{
      return emp.city.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
    })
  }

}
