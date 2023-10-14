import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    TableModule,
    ToastModule,
    ButtonModule
    
  ]
})
export class CursosModule { }
