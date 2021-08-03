package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokedex;
import br.com.pokeapi.model.PokedexList;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.*;


@RestController
@RequestMapping("/pokemons")

public class PokemonController {



    @GetMapping
    public List<Pokedex> findAllPoke( ) throws IOException {
    String  url = null;


        List allattributes =  new ArrayList();

        int i;

        RestTemplate res = new RestTemplate();
        PokedexList response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0", PokedexList.class);

        assert response != null;
        List<Pokedex> results = response.getResults();

       for(i=0; i< results.size(); i++){

            url =  results.get(i).getUrl();


           PokedexList Data = res.getForObject(url,PokedexList.class);
            List<Pokedex>  types = Data.getTypes();
            List<Pokedex> stats  = Data.getStats();
            allattributes.add(types);
            allattributes.add(stats);


       }





       // int pageSize = 9;

       // if (page <= 0) {
          //  throw new IllegalArgumentException("invalid page size: " + pageSize);
     //   }

      //  int fromIndex = (page - 1) * pageSize;
      //  if (results == null || results.size() < fromIndex) {
           // return Collections.emptyList();
       // }

       // return results.subList(fromIndex, Math.min(fromIndex + pageSize, results.size()));
        return allattributes;

    }

}
