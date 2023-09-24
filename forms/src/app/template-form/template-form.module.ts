import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    TemplateFormComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AlertModule
  ]
})
export class TemplateFormModule { }
