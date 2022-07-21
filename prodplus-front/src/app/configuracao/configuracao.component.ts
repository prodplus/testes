import { Component, OnInit } from '@angular/core';

import { Turno } from '../models/auxiliares/turno';
import { Configuracao, ordenaTurnos } from '../models/configuracao';
import { ConfiguracaoService } from '../services/configuracao.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {
  isLoading = false;
  configuracao: Configuracao = new Configuracao([], [], [], false, 0);

  constructor(private configService: ConfiguracaoService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.configService.buscar().subscribe({
      next: (c) => (this.configuracao = c),
      complete: () => {
        this.ordenarTodosTurnos();
        this.isLoading = false;
      },
    });
  }

  private ordenarTodosTurnos() {
    this.configuracao.turnosSemana = ordenaTurnos(this.configuracao.turnosSemana);
    this.configuracao.turnosSabado = ordenaTurnos(this.configuracao.turnosSabado);
    this.configuracao.turnosDomingo = ordenaTurnos(this.configuracao.turnosDomingo);
  }

  private salvar() {
    this.isLoading = true;
    this.configService.salvar(this.configuracao).subscribe({
      next: c => {
        this.configuracao = c;
        this.ordenarTodosTurnos();
      },
      complete: () => (this.isLoading = false),
    })
  }

  private inserirTurno(periodo: string, t: Turno) {
    this.isLoading = true;
    this.configService.inserirTurno(periodo, t).subscribe({
      next: (c) => (this.configuracao = c),
      complete: () => {
        this.ordenarTodosTurnos();
        this.isLoading = false;
      },
    })
  }

  alterouTurno(periodo: string, t: Turno | number) {
    if (typeof t === 'number') this.salvar();
    if (t instanceof Turno) this.inserirTurno(periodo, t);
  }

}
