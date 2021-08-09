package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokemon;
import br.com.pokeapi.model.PokemonResults;
import br.com.pokeapi.model.ListPokemons;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.util.*;

@RestController

public class PokemonController {
    @RequestMapping("/pokemons")
     public  String index(){

         return "  its code was  runing ";
     }


    @GetMapping("/pokemons/list")
    public List<Pokemon> findAllPoke( ){

        List<Pokemon> array = new ArrayList<>();
        int i;

        RestTemplate res = new RestTemplate();



        ListPokemons response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0", ListPokemons.class);
        assert response != null;
        List<PokemonResults> results = response.getResults();

        for(i=0; i< results.size(); i++){
            Pokemon pokemon = res.getForObject(results.get(i).getUrl(),Pokemon.class);
            array.add(pokemon);
        }



        return array;



    }

}
