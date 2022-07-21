import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';

import { BotaoAtivarColComponent } from './botao-ativar-col/botao-ativar-col.component';
import { PaginaComponent } from './pagina/pagina.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TituloComponent } from './titulo/titulo.component';
import { BotaoHomeComponent } from './botao-home/botao-home.component';
import { CadTurnoComponent } from './cad-turno/cad-turno.component';

@NgModule({
  declarations: [
    BotaoAtivarColComponent,
    PaginaComponent,
    SpinnerComponent,
    TituloComponent,
    BotaoHomeComponent,
    CadTurnoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GoogleChartsModule
  ],
  exports: [PaginaComponent,
    TituloComponent,
    BotaoHomeComponent,
    CadTurnoComponent
  ]
})
export class ComponentsModule { }
