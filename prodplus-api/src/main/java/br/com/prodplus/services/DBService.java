package br.com.prodplus.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.prodplus.models.Configuracao;
import br.com.prodplus.models.Feriado;
import br.com.prodplus.models.auxiliares.Turno;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
@Service
public class DBService {

	@Autowired
	private ConfiguracaoService configService;
	@Autowired
	private FeriadoService feriadoService;

	@SuppressWarnings("unused")
	public void initDatabase() {
		Turno turno1 = new Turno(LocalTime.of(8, 0), LocalTime.of(11, 30));
		Turno turno2 = new Turno(LocalTime.of(13, 30), LocalTime.of(18, 0));
		this.configService.salvar(new Configuracao(1, new HashSet<>(Arrays.asList(turno1, turno2)),
				new HashSet<>(Arrays.asList(turno1)), new HashSet<>(), false, null));

		Feriado natal = this.feriadoService
				.salvar(new Feriado(null, "NATAL", LocalDate.of(2022, 12, 25), true));
	}

}
