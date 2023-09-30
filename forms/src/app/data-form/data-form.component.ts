
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/httpService';
import { Uf } from 'src/model/uf';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{
 
  form!: FormGroup;
  type!: string;
  showAlert: boolean = false;
  listUf: Uf[] = [{Nome:'Lista de estados', Sigla:''}]
  listSkil: any[] = [];
  selectedlistSkil: any[] = [{name:'software skils', id:''}]
  newletter!: string
  constructor(private formBuilder:FormBuilder, private httpService: HttpService ){}
  
  ngOnInit(){
    this.getListUf()
    this.type = "info"

    this.listSkil=[{
      id:1,
      name:'Nodejs',
    },
    {
      id:2,
      name:'Angular',
    },
    {
      id:3,
      name:'Sql server',
    },
    {
      id:4,
      name:'Ionic',
    }
  ]
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
      complemento:[null],
      newletter:[''],
      selectedlistSkil:['']
    })

   
  }

  buscarCep(){
    const cep = this.form.controls['cep'].value
    this.httpService.getCep(cep).subscribe({
      next: (res:any) => {
    this.listUf = []
      this.form.controls['rua'].setValue(res.logradouro)
      this.form.controls['bairro'].setValue(res.bairro)
      this.form.controls['cidade'].setValue(res.localidade)
      this.listUf.push({
          Sigla: res.uf,
          Nome: res.uf
      })
      },
      error: () => {},
      complete: () => {}
    })
  }

  onSubmit(){
  Object.keys(this.form.controls).forEach(campo => {
    console.log(campo);
    
  })
  return this.httpService.saveEndereco(this.form.value).subscribe({
    next: (res:any) => {
      this.type= "info";
      this.showAlert= true
      this.form.reset()
    },
    error: (e:any) => {
      alert('error')
    },
    complete: () => console.log('completed')
  })
  }

  getListUf(){
    this.httpService.listUf().subscribe({
      next: (res:any) => {
        res.map((item:any) => {
          this.listUf.push({
            Sigla: item.Sigla,
            Nome: item.Nome
          })   
        })
      },
      complete: () => {},
      error: () => {}
    })
  }
}

