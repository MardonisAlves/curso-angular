import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly API = `${environment.API}`

  constructor(private http:HttpClient) { }

  list(){
   return this.http.get(`${this.API}/cursos`)
  }
}
