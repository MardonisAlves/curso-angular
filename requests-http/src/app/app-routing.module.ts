
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
 
  {
    path:'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path:'*' , component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
