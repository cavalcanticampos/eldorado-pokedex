package br.com.pokeapi.controller;

import br.com.pokeapi.controller.dto.PokemonDto;
import br.com.pokeapi.model.*;
import br.com.pokeapi.repository.RepositoryResultData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/")
@Api("Api Rest Pokemons")
@CrossOrigin(origins = "*")
public class PokeController {

    @Autowired
    RepositoryResultData repository;

    

    @GetMapping("/pokemons")
    @ApiOperation(
            "Essa rota retorna uma  lista de todos os pokemons vindo do banco de dados podendo passa um argumento PAGE para paginaçao"
    )
    public List pokemonsAll(Integer page) {
        List<Pokemon> pokemon = repository.findAll();


        int pageSize = 9;
        int fromIndex;
        if (page == null || page == 0) {
            fromIndex = 0;
        } else {
            fromIndex = (page - 1) * pageSize;
        }
        if (pokemon.size() < fromIndex) {
            return Collections.emptyList();
        }
        //  List<PokemonDto> ListDto = pokemon.stream().map(x->new PokemonDto(x)).collect(Collectors.toList());

        System.out.println(pokemon.size());
        return pokemon.subList(fromIndex, Math.min(fromIndex + pageSize, pokemon.size()));

    }


  }





