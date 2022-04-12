import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private http:HttpClient) { }
  getuser(){
    return this.http.get<any>('http://localhost:3000/products')
  }

  addUser(body:any){
    return this.http.post<any>('http://localhost:3000/products',body)
  }


  updateUser(id:any,body:any){
    return this.http.put<any>('http://localhost:3000/products/'+id,body)
  }

  deleteUser(id:any,body:any){
    return this.http.delete<any>('http://localhost:3000/products/'+id,body)
  }


}
