export class Feriado {
  id: number | null;
  descricao: string;
  data: string;
  repete: boolean;

  constructor(descricao: string, data: string, repete: boolean, id?: number) {
    this.descricao = descricao;
    this.data = data;
    this.repete = repete;
    if (typeof id == 'undefined') this.id = null;
    else this.id = id;
  }
}
