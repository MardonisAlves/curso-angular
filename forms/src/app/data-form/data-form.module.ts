import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ]
})
export class DataFormModule { }
