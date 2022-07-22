import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadFeriadoResolver } from "../resolvers/cad-feriado.resolver";

import { CadFeriadoComponent } from "./feriado/cad-feriado/cad-feriado.component";
import { ListaFeriadosComponent } from "./feriado/lista-feriados/lista-feriados.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'feriados', children: [
      { path: '', component: ListaFeriadosComponent },
      {
        path: 'novo', children: [
          { path: '', component: CadFeriadoComponent },
          {
            path: ':id', component: CadFeriadoComponent,
            resolve: { feriado: CadFeriadoResolver }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule {}
