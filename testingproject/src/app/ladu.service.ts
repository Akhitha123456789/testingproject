import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaduService {
  empData=[
    {
      empName:'Akhi',
      empId:45,
    },
    {
      empName:'bala',
      empId:404,
    },
    {
      
        empName:'vanshika',
        empId:40,
      },
      {
      
        empName:'shiva',
        empId:403,
      }
  ]

  constructor() { }
}
