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
import { ModalComponent } from './modal/modal.component';
import { BotaoNovoComponent } from './botao-novo/botao-novo.component';
import { ControleComponent } from './controle/controle.component';
import { TabelaComponent } from './tabela/tabela.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { BotaoEditarTabComponent } from './botao-editar-tab/botao-editar-tab.component';
import { BotaoExcluirTabComponent } from './botao-excluir-tab/botao-excluir-tab.component';
import { BotaoCancelarComponent } from './botao-cancelar/botao-cancelar.component';

@NgModule({
  declarations: [
    BotaoAtivarColComponent,
    PaginaComponent,
    SpinnerComponent,
    TituloComponent,
    BotaoHomeComponent,
    CadTurnoComponent,
    ModalComponent,
    BotaoNovoComponent,
    ControleComponent,
    TabelaComponent,
    PaginadorComponent,
    BotaoEditarTabComponent,
    BotaoExcluirTabComponent,
    BotaoCancelarComponent
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
  exports: [
    PaginaComponent,
    TituloComponent,
    BotaoHomeComponent,
    CadTurnoComponent,
    ModalComponent,
    BotaoNovoComponent,
    ControleComponent,
    TabelaComponent,
    PaginadorComponent,
    BotaoEditarTabComponent,
    BotaoExcluirTabComponent,
    BotaoCancelarComponent
  ]
})
export class ComponentsModule { }
