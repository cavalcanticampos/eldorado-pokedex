package br.com.pokeapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@SpringBootApplication
public class PokeapiApplication {

	@RequestMapping("/")
	@ResponseBody
	String   home (){
		return  "Hello========";
	}



	public static void main(String[] args) {


		SpringApplication.run(PokeapiApplication.class, args);
	}

}
