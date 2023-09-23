import { DataFormComponent } from './data-form/data-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path: 'template', component: TemplateFormComponent},
  {path: 'dataforme', component: DataFormComponent },
  {path: '', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
