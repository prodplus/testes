import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.url + '/enums';

@Injectable({providedIn: 'root'})
export class EnumService {
  constructor(private http: HttpClient) { }

  getPeriodos(): Observable<string[]> {
    return this.http.get<string[]>(`${URL}/periodos`);
  }

}
