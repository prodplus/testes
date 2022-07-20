package br.com.prodplus.models.auxiliares;

import java.io.Serializable;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Turno implements Serializable, Comparable<Turno> {

	private static final long serialVersionUID = -6429769542133971064L;
	@Column(nullable = false)
	@NotNull(message = "o início é obrigatório!")
	private LocalTime inicio;
	@Column(nullable = false)
	@NotNull(message = "o fim é obrigatório!")
	private LocalTime fim;

	public static boolean ehDentro(LocalTime time, Turno turno, int faltantes) {
		LocalTime comFalta = time.plusSeconds(faltantes);
		if (time.equals(turno.getInicio()))
			return true;
		if (time.isAfter(turno.getInicio()) && comFalta.isBefore(turno.getFim()))
			return true;
		else
			return false;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fim == null) ? 0 : fim.hashCode());
		result = prime * result + ((inicio == null) ? 0 : inicio.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Turno other = (Turno) obj;
		if (fim == null) {
			if (other.fim != null)
				return false;
		} else if (!fim.equals(other.fim))
			return false;
		if (inicio == null) {
			if (other.inicio != null)
				return false;
		} else {
			if (inicio.equals(other.getInicio()) || fim.equals(other.getFim()))
				return true;
			if (inicio.isAfter(other.getInicio()) && inicio.isBefore(other.getFim()))
				return true;
			if (fim.isBefore(other.getFim()) && fim.isAfter(other.getInicio()))
				return true;
			if (inicio.isBefore(other.getInicio()) && fim.isAfter(other.getInicio()))
				return true;
		}
		return false;
	}

	@Override
	public int compareTo(Turno o) {
		if (this.inicio != null && o.getInicio() != null && this.fim != null
				&& o.getFim() != null) {
			if (inicio.equals(o.getInicio()) || fim.equals(o.getFim()))
				return 0;
			if (inicio.isAfter(o.getInicio()) && inicio.isBefore(o.getFim()))
				return 0;
			if (fim.isBefore(o.getFim()) && fim.isAfter(o.getInicio()))
				return 0;
			if (inicio.isBefore(o.getInicio()) && fim.isAfter(o.getFim()))
				return 0;
			return this.inicio.compareTo(o.getInicio());
		}
		return 0;
	}

}
