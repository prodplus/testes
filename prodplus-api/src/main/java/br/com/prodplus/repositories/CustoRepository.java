package br.com.prodplus.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.prodplus.models.Custo;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
@Repository
public interface CustoRepository extends JpaRepository<Custo, Integer> {

	List<Custo> findAllByAtivo(boolean ativos, Sort by);

	Page<Custo> findAllByAtivo(boolean ativos, Pageable pageable);

}
