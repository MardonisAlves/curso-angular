import { Component } from '@angular/core';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-template-form', 
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: Usuario = {name:'Mardonis', email:'mardonisgp@gmail.com'}

  onSubmit(f:any) {
    
    console.log(f);
    
  }

}
