import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from '../data-form/data-form.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TemplateFormModule,
    DataFormComponent,
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateFormModule { }
