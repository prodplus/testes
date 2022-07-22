import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Feriado } from 'src/app/models/feriado';
import { FeriadoService } from 'src/app/services/feriado.service';
import { toDateApi } from 'src/app/utils/date-utils';
import { getInputClass, getInputUpperClass } from 'src/app/utils/validation';

@Component({
  selector: 'app-cad-feriado',
  templateUrl: './cad-feriado.component.html',
  styleUrls: ['./cad-feriado.component.css']
})
export class CadFeriadoComponent implements OnInit, AfterViewInit {
  isLoading = false;
  feriado: Feriado = new Feriado('', '', false);
  form!: FormGroup;
  @ViewChild('modal')
  modal!: ModalComponent;
  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  constructor(
    private builder: FormBuilder,
    private feriadoService: FeriadoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      descricao: ['', [Validators.required]],
      data: ['', [Validators.required]],
      repete: [false, [Validators.required]]
    });

    this.route.paramMap.subscribe((values) => {
      if (values.get('id')) {
        this.feriado = this.route.snapshot.data['feriado'];
        this.carregaForm(this.feriado);
      } else {
        this.feriado = new Feriado('', '', false);
      }
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  private carregaFeriado(): Feriado {
    return new Feriado(this.form.get('descricao')?.value.toUpperCase(),
        toDateApi(new Date(this.form.get('data')?.value)), this.form.get('repete')?.value);
  }

  private carregaForm(f: Feriado) {
    this.form.patchValue({
      descricao: f.descricao,
      data: f.data,
      repete: f.repete
    })
  }

  salvar() {
    this.isLoading = true;
    if (this.feriado.id != null) {
      this.feriadoService.atualizar(this.feriado.id, this.carregaFeriado()).subscribe({
        next: (f) => this.feriado = f,
        error: (err) => {
          this.isLoading = false;
          this.modal.openErro(err);
        },
        complete: () => {
          this.isLoading = false;
          this.modal.open('success', 'Feriado Cadastrado!',
              `${this.feriado.descricao} cadastrado com sucesso!`, 's', false);
          this.router.navigate(['/cadastros']);
        }
      });
    } else {
      this.feriadoService.salvar(this.carregaFeriado()).subscribe({
        next: (f) => this.feriado = f,
        error: (err) => {
          this.isLoading = false;
          this.modal.openErro(err);
        },
        complete: () => {
          this.isLoading = false;
          this.modal.open('success', 'Feriado Cadastrado!',
              `${this.feriado.descricao} cadastrado com sucesso!`, 's', false);
          this.router.navigate(['/cadastros']);
        }
      })
    }
  }

  cancelar() {
    this.router.navigate(['/cadastros/feriados']);
  }

  getInputUpperClass(field: string): string {
    return getInputUpperClass(field, this.form);
  }

  getInputClass(field: string): string {
    return getInputClass(field, this.form);
  }

}
