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
    public List<Pokemon> findAllPoke(   ){
        List<Pokemon> array = new ArrayList<>();
        int i;
       // int pageSize = 9;
        RestTemplate res = new RestTemplate();
      //  int fromIndex;

      //  if ( page <= 0) {
      //      fromIndex = 0;

      //  } else {
          //   fromIndex = (page - 1) * pageSize;
       // }

        ListPokemons response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=200&offset=", ListPokemons.class);
        assert response != null;
        List<PokemonResults> results = response.getResults();

        for(i=0; i< results.size(); i++){
            Pokemon pokemon = res.getForObject(results.get(i).getUrl(),Pokemon.class);
            array.add(pokemon);
        }

        //if (array.size() < fromIndex) {
            //return Collections.emptyList();
     //   }

       // return array.subList(fromIndex, Math.min(fromIndex + pageSize, array.size()));
        return array;
    }

}
