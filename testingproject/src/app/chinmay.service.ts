import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChinmayService {
  empData=
  [
    {
    empName:"shiva",
    empId:12
  },
  {
    empName:"akhita",
    empId:42
  },
  {
    empName:"keerti",
    empId:22
  }
  ]
  constructor() { }
}

