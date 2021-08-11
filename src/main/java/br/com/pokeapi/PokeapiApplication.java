package br.com.pokeapi;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;


@SpringBootApplication
public class PokeapiApplication {

	@RequestMapping("/")
	String home() {
		return "=====API-REST======";
	}

	public static void main(String[] args) {
		SpringApplication.run(PokeapiApplication.class, args);
		System.out.println("hello!!!!");
	}

}
