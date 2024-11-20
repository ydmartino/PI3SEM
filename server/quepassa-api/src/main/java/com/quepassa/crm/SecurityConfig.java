package com.quepassa.crm;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig implements WebMvcConfigurer {

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer(){
			@Override
			public void addCorsMappings(CorsRegistry registry){

				registry.addMapping("/**")
				.allowedOrigins("http://localhost:5173")
				.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
				.allowedHeaders("*") // Permite todos os cabeçalhos
				.exposedHeaders("Authorization") // Expõe cabeçalhos necessários
				.allowCredentials(true) // Permite cookies ou credenciais
				.maxAge(3600); // Tempo de cache da configuração
			}

		};

	}
}
