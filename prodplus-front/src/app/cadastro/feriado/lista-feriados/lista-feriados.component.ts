import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Page } from 'src/app/models/auxiliares/page';
import { RespModal } from 'src/app/models/auxiliares/resp-modal';
import { Feriado } from 'src/app/models/feriado';
import { FeriadoService } from 'src/app/services/feriado.service';
import { toDateApi } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-lista-feriados',
  templateUrl: './lista-feriados.component.html',
  styleUrls: ['./lista-feriados.component.css']
})
export class ListaFeriadosComponent implements OnInit {
  isLoading = false;
  feriados: Page<Feriado> = new Page();
  idFeriado: number | null = null;
  pagina = 1;
  @ViewChild('modal')
  modal!: ModalComponent;

  constructor(private feriadoService: FeriadoService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.recarregar(this.pagina);
  }

  private recarregar(pagina: number) {
    this.feriadoService.listar(toDateApi(new Date()), pagina - 1, 20).subscribe({
      next: (p) => (this.feriados = p),
      error: err => {
        this.isLoading = false;
        this.modal.openErro(err);
      },
      complete: () => (this.isLoading = false),
    })
  }

  mudaPagina(pagina: number) {
    this.pagina = pagina;
    this.isLoading = true;
    this.recarregar(this.pagina);
  }

  private excluir(id: number) {
    this.isLoading = true;
    this.feriadoService.excluir(id).subscribe({
      error: (err) => {
        this.isLoading = false;
        this.modal.openErro(err);
      },
      complete: () => {
        this.pagina = 1;
        this.recarregar(this.pagina);
      }
    })
  }

  chamaModal(resp: { id: number | null; tipo: string }) {
    this.idFeriado = resp.id;
    this.modal.open('warning', 'Atenção!!', 'Tem certeza que deseja EXCLUIR o feriado??',
        'e', true);
  }

  concordaModal(resp: RespModal) {
    if (resp.confirmou && this.idFeriado != null)
      this.excluir(this.idFeriado);
  }

}
