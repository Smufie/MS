package com.mailsender;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan({ "com.mailsender" })
@EntityScan("com.mailsender.person")
@EnableJpaRepositories("com.mailsender")
public class AppConfig {
}
