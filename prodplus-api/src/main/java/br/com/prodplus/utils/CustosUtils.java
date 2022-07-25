package br.com.prodplus.utils;

import java.math.BigDecimal;
import java.util.List;

import br.com.prodplus.models.Configuracao;
import br.com.prodplus.models.Custo;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
public class CustosUtils {

	/**
	 * Calcula o total de custos por mês na indústria.
	 * 
	 * @param custos
	 * @param config
	 * @return
	 */
	public static BigDecimal getTotalMes(List<Custo> custos, Configuracao config) {
		Long segundosMes = ConfigUtils.segundosSemana(config) * 4;
		Double total = 0.0;

		for (Custo custo : custos) {
			switch (custo.getPeriodo()) {
			case POR_SEGUNDO:
				total += custo.getValor().doubleValue() * segundosMes;
				break;
			case POR_MINUTO:
				total += custo.getValor().doubleValue() * (segundosMes / 60);
				break;
			case DIARIO:
				total += custo.getValor().doubleValue() * 22;
				break;
			case SEMANAL:
				total += custo.getValor().doubleValue() * 4;
				break;
			case QUINZENAL:
				total += custo.getValor().doubleValue() * 2;
				break;
			case MENSAL:
				total += custo.getValor().doubleValue();
				break;
			case BIMESTRAL:
				total += custo.getValor().doubleValue() / 2;
				break;
			case TRIMESTRAL:
				total += custo.getValor().doubleValue() / 3;
				break;
			case SEMESTRAL:
				total += custo.getValor().doubleValue() / 6;
				break;
			case ANUAL:
				total += custo.getValor().doubleValue() / 12;
				break;
			default:
				total += custo.getValor().doubleValue();
				break;
			}
		}

		return BigDecimal.valueOf(total);
	}

}
