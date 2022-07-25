package br.com.prodplus.models;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import br.com.prodplus.models.enums.Periodo;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
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
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Custo implements Serializable {

	private static final long serialVersionUID = -7203875387573979548L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@EqualsAndHashCode.Include
	@Column(nullable = false, unique = true)
	@NotBlank(message = "a descrição é obrigatória!")
	private String descricao;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 20)
	@NotNull(message = "o período é obrigatório!")
	private Periodo periodo;
	@Column(nullable = false)
	@NotNull(message = "o valor é obrigatório!")
	@Positive(message = "valor inválido!")
	private BigDecimal valor;
	@Column(nullable = false)
	@NotNull(message = "campo obrigatório!")
	private boolean ativo = true;

}
