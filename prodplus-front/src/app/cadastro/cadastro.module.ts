import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrgChartModule } from 'angular-org-chart';
import { GoogleChartsModule } from 'angular-google-charts';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ListaFeriadosComponent } from './feriado/lista-feriados/lista-feriados.component';
import { CadFeriadoComponent } from './feriado/cad-feriado/cad-feriado.component';
import { HomeComponent } from './home/home.component';
import { ListaCustosComponent } from './custo/lista-custos/lista-custos.component';
import { CadCustoComponent } from './custo/cad-custo/cad-custo.component';

@NgModule({
  declarations: [
    ListaFeriadosComponent,
    CadFeriadoComponent,
    HomeComponent,
    ListaCustosComponent,
    CadCustoComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    NgxMaskModule,
    FontAwesomeModule,
    OrgChartModule,
    GoogleChartsModule
  ]
})
export class CadastroModule { }
