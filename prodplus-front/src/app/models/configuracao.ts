import { Turno } from "./auxiliares/turno";

export class Configuracao {
  turnosSemana: Turno[];
  turnosSabado: Turno[];
  turnosDomingo: Turno[];
  estruturaCompleta: boolean;
  mediaIpcm: number;

  constructor(turnosSemana: Turno[], turnosSabado: Turno[], turnosDomingo: Turno[],
      estruturaCompleta: boolean, mediaIpcm: number) {
    this.turnosSemana = turnosSemana;
    this.turnosSabado = turnosSabado;
    this.turnosDomingo = turnosDomingo;
    this.estruturaCompleta = estruturaCompleta;
    this.mediaIpcm = mediaIpcm;
  }
}

export function ordenaTurnos(turnos: Turno[]): Turno[] {
  turnos.sort((a, b) => a.inicio > b.inicio ? 1 : a.inicio < b.inicio ? -1 : 0);
  return turnos;
}
