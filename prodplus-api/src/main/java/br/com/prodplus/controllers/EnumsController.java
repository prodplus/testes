package br.com.prodplus.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.prodplus.models.enums.Periodo;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
@RestController
@RequestMapping("/enums")
@CrossOrigin("http://localhost:4200")
public class EnumsController {
	
	@GetMapping("/periodos")
	public ResponseEntity<Periodo[]> getPeriodos() {
		return ResponseEntity.ok(Periodo.values());
	}

}
