import { HttpService } from './../../httpService';
import { Component } from '@angular/core';
import { Cep } from 'src/model/cep';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: Usuario = {
    cep: '',
    email: '',
    name: '',
    numero: '',
    complemento: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private httpService:HttpService){}

  onSubmit(f: any) {
   return this.httpService.saveEndereco(this.usuario).subscribe((res) => {
    this.usuario.name = ''
    this.usuario.email = ''
    this.usuario.bairro = ''
    this.usuario.cidade = ''
    this.usuario.rua =''
    this.usuario.cep = ''
    this.usuario.estado = ''
    this.usuario.complemento = ''
    this.usuario.numero = ''
   })
  }

  verificaValidTouched(campo:any){
    return !campo.valid && campo.touched
  }
  
  aplicaCsserror(campo:any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': !campo.valid && campo.touched
    }
  }

  buscarCep(cep:number){
    this.httpService.getCep(cep).subscribe((res:Cep) => {
    this.usuario.bairro = res.bairro
    this.usuario.cidade = res.localidade
    this.usuario.rua = res.logradouro
    this.usuario.estado = res.uf
    this.usuario.complemento = res.complemento
   })
   
  }

}
