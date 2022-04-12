import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//  import { BalajiComponent } from './balaji/balaji.component';
import { TemplateComponent } from './template/template.component';
import { ObservableComponent } from './observable/observable.component';
import { KrishComponent } from './krish/krish.component';
import { MounicaComponent } from './mounica/mounica.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { ViewComponent } from './view/view.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { KeertiComponent } from './keerti/keerti.component';
import { SonakshiComponent } from './sonakshi/sonakshi.component';
import { SanjaiComponent } from './sanjai/sanjai.component';
import { Template1Component } from './template1/template1.component';
import { DhanaComponent } from './dhana/dhana.component';
import { ArrayComponent } from './array/array.component';
import { PrntComponent } from './prnt/prnt.component';
import { ChldComponent } from './chld/chld.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { HelloComponent } from './hello/hello.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipePipe } from './pipe.pipe';
import { AkithaPipe } from './akitha.pipe';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ContentChildrenComponent } from './content-children/content-children.component';
import { Content1Component } from './content1/content1.component';
import { PracticeComponent } from './practice/practice.component';
// import { NireshaComponent } from './niresha/niresha.component';


//  import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [
    AppComponent,

    
    // BalajiComponent,
          TemplateComponent,
          ObservableComponent,
          KrishComponent,
          MounicaComponent,
          ParentComponent,
          ChildComponent,
          Parent1Component,
          Child1Component,
          Parent2Component,
          Child2Component,
          ViewComponent,
          ReactiveComponent,
          KeertiComponent,
          SonakshiComponent,
          SanjaiComponent,
          Template1Component,
          DhanaComponent,
          ArrayComponent,
          PrntComponent,
          ChldComponent,
          Parent3Component,
          Child3Component,
          HelloComponent,
          Reactive1Component,
          HttpComponent,
          FormComponent,
          PipeComponent,
          PipePipe,
          AkithaPipe,
          LoginComponent,
          ContentComponent,
          ContentChildrenComponent,
          Content1Component,
          PracticeComponent,
          // NireshaComponent,
        
          
    // TemplateComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // TemplateComponent
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
