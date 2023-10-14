
import { CursoService } from '../curso.service';
import { Cursos } from './../../model/curso';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {
  cursos!: Cursos[];
  editing: boolean = false;
  loading!: boolean;
  selectedCursos!: Cursos[]

constructor(private service:CursoService){}

  ngOnInit(){ 
   this.listCurso()
   }

  listCurso(){
    this.loading = true;
    this.service.list().subscribe({
      next: (res:any) => {
        this.cursos = res
      },
      complete: () => {this.loading = false},
      error: (err) => {
        console.log(err);
        
      }
    })
  }


}
