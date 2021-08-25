package br.com.pokeapi;
import br.com.pokeapi.model.PokemonResults;
import br.com.pokeapi.repository.RepositoryResultData;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;


@SpringBootApplication
public class PokeapiApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(PokeapiApplication.class, args);
		System.out.println("hello!!!!");
	}

	}



