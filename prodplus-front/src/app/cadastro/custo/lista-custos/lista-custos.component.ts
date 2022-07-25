import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { trataMensagem } from 'src/app/models/auxiliares/mensagem';
import { Page } from 'src/app/models/auxiliares/page';
import { RespModal } from 'src/app/models/auxiliares/resp-modal';
import { Custo } from 'src/app/models/custo';
import { CustoService } from 'src/app/services/custo.service';

@Component({
  selector: 'app-lista-custos',
  templateUrl: './lista-custos.component.html',
  styleUrls: ['./lista-custos.component.css']
})
export class ListaCustosComponent implements OnInit {
  isLoading = false;
  custos: Page<Custo> = new Page();
  idCusto: number | null = null;
  ativos = true;
  pagina = 1;
  totalMes: number = 0;
  @ViewChild('modal')
  modal!: ModalComponent;

  constructor(private custoService: CustoService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.recarregar(this.pagina);
  }

  private recarregar(pagina: number) {
    this.custoService.listarP(pagina - 1, 20, this.ativos).subscribe({
      next: (c) => (this.custos = c),
      error: (err) => {
        this.isLoading = false;
        this.modal.openErro(err);
      },
      complete: () => {
        this.custoService.getTotalMes().subscribe({
          next: (t) => (this.totalMes = t),
          error: (err) => {
            this.isLoading = false;
            this.modal.openErro(err);
          },
          complete: () => (this.isLoading = false),
        });
        this.isLoading = false;
      }
    })
  }

  private ativar(id: number) {
    this.isLoading = true;
    this.custoService.ativar(id).subscribe({
      error: (err) => {
        this.isLoading = false;
        this.modal.openErro(err);
      },
      complete: () => this.recarregar(this.pagina),
    });
  }

  private excluir(id: number) {
    this.isLoading = true;
    this.custoService.excluir(id).subscribe({
      error: (err) => {
        this.isLoading = false;
        this.modal.openErro(err);
      },
      complete: () => this.recarregar(this.pagina),
    });
  }

  alteraAtivos() {
    this.isLoading = true;
    this.ativos = !this.ativos;
    this.mudaPagina(1);
  }

  mudaPagina(pagina: number) {
    this.pagina = pagina;
    this.recarregar(this.pagina);
  }

  chamaModal(resp: { id: number | null, tipo: string }) {
    this.idCusto = resp.id;
    const mensagem = trataMensagem(resp.tipo);
    this.modal.open('warning', 'Atenção!!', `Tem certeza que deseja ${mensagem} o custo??`,
        resp.tipo, true);
  }

  concordou(resp: RespModal) {
    if (resp.confirmou && this.idCusto != null) {
      resp.tipo === 'a' || resp.tipo === 'd' ? this.ativar(this.idCusto)
        : this.excluir(this.idCusto);
    }
  }

}
