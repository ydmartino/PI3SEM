package com.quepassa.crm;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig implements WebMvcConfigurer {

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer(){
			@Override
			public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry){

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

	@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Desativa CSRF
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/**").permitAll() // Permitir acesso a estas rotas
                .anyRequest().authenticated() // Exigir autenticação para outras rotas
            );
        return http.build();
    }

}
