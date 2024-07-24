package com.crafts.order;

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

	@Bean
	public RouteLocator myRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("inventory",r -> r.path("/inventory/**")
						.filters(f -> f.stripPrefix(1))
						.uri("lb://inventory"))
				.route("onboarding",r -> r.path("/onboarding/**")
						.filters(f -> f.stripPrefix(1))
						.uri("lb://onboarding"))
				.route("order",r -> r.path("/order/**")
						.filters(f -> f.stripPrefix(1))
						.uri("lb://order"))
				.route("auth-server",r -> r.path("/oauth/**")
						.filters(f -> f.stripPrefix(1))
						.uri("lb://auth-server"))
				.build();
	}
}
