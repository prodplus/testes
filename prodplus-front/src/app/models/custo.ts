export class Custo {
  id: number | null;
  descricao: string;
  periodo: string;
  valor: number;
  ativo: boolean;

  constructor(descricao: string, periodo: string, valor: number,
      ativo: boolean, id?: number) {
    this.descricao = descricao;
    this.periodo = periodo;
    this.valor = valor;
    this.ativo = ativo;
    if (typeof id == 'undefined') this.id = null;
    else this.id = id;
  }
}
