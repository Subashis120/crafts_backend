package com.crafts.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

//	@Bean
//	public RouteLocator myRoutes(RouteLocatorBuilder builder) {
//		return builder.routes()
//				.route("onboarding",r -> r.path("/onboarding/**")
//				.uri("http://localhost:8080"))
//				.build();
//	}
}
