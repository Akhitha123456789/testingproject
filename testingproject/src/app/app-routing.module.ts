import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { observable, Observable } from 'rxjs';
import { Reactive1Component } from './Reactive1/reactive1.component'
 import { TemplateComponent } from './template/template.component'
const routes: Routes = [{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
  // {path:'reactive1,component:'},

  // {path:'template',component:TemplateComponent},
  // {path:'observable',component:observableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
