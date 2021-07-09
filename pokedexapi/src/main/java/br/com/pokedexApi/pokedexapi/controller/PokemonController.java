package br.com.pokedexApi.pokedexapi.controller;

import br.com.pokedexApi.pokedexapi.model.Pokemon;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/pokemons")
public class PokemonController {

    List<Pokemon> pokelist =  new ArrayList<>();


    @GetMapping("/listing/{id}")
  public Pokemon findItem(@PathVariable("id")  Long  id){

        Optional<Pokemon> pokeFind  =   pokelist.stream().filter(user -> user.getId()==id).findFirst();
        if(pokeFind.isPresent()){
            return pokeFind.get();
        }
            return null;
    }

  @PostMapping("/")
  public List<Pokemon> creating(@RequestBody Pokemon pokemon){
        pokelist.add(pokemon);
        return pokelist;
    }

    @GetMapping("listing")

    public List<Pokemon> listing(){
        return pokelist;
    }

}
