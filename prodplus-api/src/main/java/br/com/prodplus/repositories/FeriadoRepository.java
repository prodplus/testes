package br.com.prodplus.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.prodplus.models.Feriado;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
@Repository
public interface FeriadoRepository extends JpaRepository<Feriado, Integer> {

	List<Feriado> findAllByData(LocalDate data);

	Page<Feriado> findAllByDataAfter(LocalDate de, Pageable pageable);

}
