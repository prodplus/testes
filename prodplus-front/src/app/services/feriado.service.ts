import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/auxiliares/page';
import { Feriado } from '../models/feriado';

const URL = environment.url + '/feriados';

@Injectable({providedIn: 'root'})
export class FeriadoService {
  constructor(private http: HttpClient) { }

  salvar(feriado: Feriado): Observable<Feriado> {
    return this.http.post<Feriado>(URL, feriado);
  }

  atualizar(id: number, feriado: Feriado): Observable<Feriado> {
    return this.http.put<Feriado>(`${URL}/${id}`, feriado);
  }

  buscar(id: number): Observable<Feriado> {
    return this.http.get<Feriado>(`${URL}/${id}`);
  }

  porData(data: string): Observable<Feriado[]> {
    return this.http.get<Feriado[]>(`${URL}/por_data/${data}`);
  }

  listar(de: string, pagina: number, quant: number): Observable<Page<Feriado>> {
    return this.http.get<Page<Feriado>>(`${URL}/listar/${pagina}/${quant}/${de}`);
  }

  excluir(id: number) {
    return this.http.delete(`${URL}/${id}`);
  }
}
