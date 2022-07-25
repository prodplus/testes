import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Custo } from 'src/app/models/custo';
import { CustoService } from 'src/app/services/custo.service';
import { EnumService } from 'src/app/services/enum.service';
import { getInputClass, getInputUpperClass, getSelectClass } from 'src/app/utils/validation';

@Component({
  selector: 'app-cad-custo',
  templateUrl: './cad-custo.component.html',
  styleUrls: ['./cad-custo.component.css']
})
export class CadCustoComponent implements OnInit, AfterViewInit {
  isLoading = false;
  idCusto: number | null = null;
  periodos: string[] = [];
  form!: FormGroup;
  @ViewChild('modal')
  modal!: ModalComponent;
  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  constructor(
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private custoService: CustoService,
    private enumService: EnumService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      descricao: ['', [Validators.required]],
      periodo: [null, [Validators.required]],
      valor: [null, [Validators.required, Validators.min(0)]],
    });

    this.enumService.getPeriodos().subscribe((p) => (this.periodos = p));

    this.route.paramMap.subscribe((values) => {
      if (values.get('id')) {
        const custo: Custo = this.route.snapshot.data['custo'];
        this.idCusto = custo.id;
        this.carregaForm(custo);
      } else {
        this.idCusto = null;
      }
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  private carregaForm(custo: Custo) {
    this.form.patchValue({
      descricao: custo.descricao,
      periodo: custo.periodo,
      valor: custo.valor
    });
  }

  private carregaCusto(): Custo {
    return new Custo(this.form.get('descricao')?.value.toUpperCase(),
      this.form.get('periodo')?.value, this.form.get('valor')?.value, true);
  }

  salvar() {
    this.isLoading = true;
    if (this.idCusto != null) {
      this.custoService.atualizar(this.idCusto, this.carregaCusto()).subscribe({
        error: (err) => {
          this.isLoading = false;
          this.modal.openErro(err);
        },
        complete: () => {
          this.isLoading = false;
          this.router.navigate(['/cadastros/custos']);
        }
      });
    } else {
      this.custoService.salvar(this.carregaCusto()).subscribe({
        error: (err) => {
          this.isLoading = false;
          this.modal.openErro(err);
        },
        complete: () => {
          this.isLoading = false;
          this.router.navigate(['/cadastros/custos']);
        }
      })
    }
  }

  cancelar() {
    this.router.navigate(['/cadastros/custos']);
  }

  getInputUpperClass(field: string): string {
    return getInputUpperClass(field, this.form);
  }

  getInputClass(field: string): string {
    return getInputClass(field, this.form);
  }

  getSelectClass(field: string): string {
    return getSelectClass(field, this.form);
  }

}
