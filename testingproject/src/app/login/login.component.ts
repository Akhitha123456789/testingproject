import { Component, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  akhi: any;
  name: any;
  brand: any;
  price: any;
  id: any;

  constructor(private talk:TalkService) { }

  ngOnInit(): void {
    this.talk.getuser().subscribe((res)=>{
      console.log(res);
      this.akhi=res;
    })
  }

 addproducts(){
   const newObj={
     
     name:this.name,
     brand:this.brand,
     price:this.price
   }
   this.talk.addUser(newObj).subscribe((res)=>{
     console.log(res);
     
   })
 }

 updateproducts(){
  const newObj={
    id:this.id,
     name:this.name,
     brand:this.brand,
     price:this.price
  }
  this.talk.updateUser(this.id,newObj).subscribe((res)=>{
    console.log(res);
    
  })
}
  delete(){
    const newObj={
      id:this.id,
       name:this.name,
       brand:this.brand,
       price:this.price
    }
    this.talk.deleteUser(this.id,newObj).subscribe((res)=>{
      console.log(res);
      
    })
}
}

