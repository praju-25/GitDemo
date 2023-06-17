import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductComponent } from './product/product.component';
import { OwnModelTemplateComponet } from './own-model-template/own-model-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RFormbuilderComponent } from './r-formbuilder/r-formbuilder.component';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    OwnModelTemplateComponet,
    ProductComponent,
    ReactiveformComponent,
    RFormbuilderComponent,
    ReactiveProductComponent,
    LoginComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
