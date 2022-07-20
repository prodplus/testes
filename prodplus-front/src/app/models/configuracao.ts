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
