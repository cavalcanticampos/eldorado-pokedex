package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokedex;
import br.com.pokeapi.model.PokedexList;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;



@RestController
@RequestMapping("/pokemons")

public class PokemonController {


    @GetMapping
    public List<Pokedex> findAllPoke(  int page) {

        RestTemplate res = new RestTemplate();

        PokedexList response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=18&offset=0", PokedexList.class);

        assert response != null;
        List<Pokedex> results = response.getResults();

        int pageSize = 9;

        if (page <= 0) {
            throw new IllegalArgumentException("invalid page size: " + pageSize);
        }

        int fromIndex = (page - 1) * pageSize;
        if (results == null || results.size() < fromIndex) {
            return Collections.emptyList();
        }

        return results.subList(fromIndex, Math.min(fromIndex + pageSize, results.size()));

    }

}
