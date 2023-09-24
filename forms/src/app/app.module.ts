import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/httpService';
import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TemplateFormModule,
    DataFormModule,
    AlertModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
