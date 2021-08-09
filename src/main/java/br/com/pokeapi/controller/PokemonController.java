package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokemon;
import br.com.pokeapi.model.PokemonResults;
import br.com.pokeapi.model.ListPokemons;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.util.*;

@RestController
@RequestMapping("/pokemons")
public class PokemonController {

    @GetMapping
    public List<Pokemon> findAllPoke(int page ){

        List<Pokemon>  array = new ArrayList<>();
        int i;
        int pageSize = 9;
        RestTemplate res = new RestTemplate();

        ListPokemons response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0", ListPokemons.class);
        List<PokemonResults> results = response.getResults();

       for(i=0; i< results.size(); i++){
           Pokemon pokemon  = res.getForObject(results.get(i).getUrl(),Pokemon.class);
           array.add(pokemon);
       }
       if (page <= 0) {
            throw new IllegalArgumentException("invalid page size: " + pageSize);
       }
        int fromIndex = (page - 1) * pageSize;

       if (array == null || array.size() < fromIndex) {
            return Collections.emptyList();
        }

        return array.subList(fromIndex, Math.min(fromIndex + pageSize, array.size()));

    }

}
