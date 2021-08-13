package br.com.pokeapi.controller;


import br.com.pokeapi.model.Pokemon;
import br.com.pokeapi.model.PokemonResults;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping({"/pokemons"})

public class PokeController {

    @GetMapping
    public List findAll(){

        List<Pokemon> array = new ArrayList<>();
        int i;

        RestTemplate res = new RestTemplate();

        PokemonResults response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", PokemonResults.class);

        System.out.println(response);

        List poke = response.getResults();



        return poke ;


    }

}
