import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from './model/cep';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   url = 'https://viacep.com.br/ws'
  constructor(private http: HttpClient) { }

  getCep(cep:number): Observable<Cep>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   return this.http.get<Cep>(`${this.url}/${cep}/json`, httpOptions).pipe()
  }

saveEndereco(endereco:any){
    return this.http.post('http://localhost:3000/endereco', endereco).pipe()
  }
listUf(){
  return this.http.get('http://localhost:3000/estados').pipe()
}
}