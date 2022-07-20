package br.com.prodplus.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.prodplus.services.DBService;

/**
 * 
 * @author Marlon F. Garcia
 *
 */
@Configuration
@Profile("dev")
public class DBConfig {
	
	@Autowired
	private DBService dbService;
	
	@Bean
	boolean instantiateDatabse() {
		this.dbService.initDatabase();
		return true;
	}

}
