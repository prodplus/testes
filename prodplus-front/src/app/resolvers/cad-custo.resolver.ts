import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Custo } from '../models/custo';
import { CustoService } from '../services/custo.service';

@Injectable({ providedIn: 'root' })
export class CadCustoResolver implements Resolve<Observable<Custo>> {
  constructor(private service: CustoService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Custo> {
    return this.service.buscar(route.params['id']);
  }
}
