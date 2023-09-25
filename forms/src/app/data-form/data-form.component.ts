import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/httpService';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{
 
  form!: FormGroup;
  type!: string;

  constructor(private formBuilder:FormBuilder, private httpService: HttpService ){}
  
  ngOnInit(){
    /* 
    this.form = new FormGroup({
      nome: new FormGroup(null),
      email: new FormControl(null)
    })
    */
  // OR 
    this.form = this.formBuilder.group({
      nome:[null,   Validators.required],
      email:[null,  [Validators.required, Validators.email]],
      rua:[null,    Validators.required],
      cep:[null,    Validators.required],
      bairro:[null, Validators.required],
      estado:[null, Validators.required],
      cidade:[null, Validators.required],
      numero:[null, Validators.required],
      complemento:[null, Validators.required]
    })
  }

  buscarCep(){
    console.log('res');
  }

  onSubmit(){
  
  return this.httpService.saveEndereco(this.form.value).subscribe({
    next: (res) => {
      this.form.reset()
    },
    error: (e) => {
      alert('error')
    },
    complete: () => console.log('completed')
  })
  }
}

