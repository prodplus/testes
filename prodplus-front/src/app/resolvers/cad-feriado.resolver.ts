import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Feriado } from '../models/feriado';
import { FeriadoService } from '../services/feriado.service';

@Injectable({ providedIn: 'root' })
export class CadFeriadoResolver implements Resolve<Observable<Feriado>> {
  constructor(private service: FeriadoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Feriado> {
    return this.service.buscar(route.params['id']);
  }
}
