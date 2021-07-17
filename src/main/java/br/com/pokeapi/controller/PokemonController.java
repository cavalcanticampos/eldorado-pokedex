package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokemon;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/")
public class PokemonController {

    List<Pokemon>  pokeList = new ArrayList<>();
    Pokemon poke  = new Pokemon();



    @GetMapping("/pokemons")

    public List<Pokemon> findAllPoke(){

        pokeList.add( new  Pokemon(1,"Bulbassaur", "#70A83B",49,49,"grass","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"));
        pokeList.add( new  Pokemon(2,"ivysaur","#70A83B",62,63,"grass","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"));
        pokeList.add( new  Pokemon(3,"venusaur","#70A83B",82,83,"grass","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"));
        pokeList.add( new  Pokemon(4,"charmander","  #F76545",52,43,"fire","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"));
        pokeList.add( new  Pokemon(5,"charmeleon","  #F76545",64,58,"fire","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"));
        pokeList.add( new  Pokemon(6,"charizard","  #F76545",84,78,"fire","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"));
        pokeList.add( new  Pokemon(7,"squirtle","A2CFF0",48,65,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"));
        pokeList.add( new  Pokemon(8,"wartortle","A2CFF0",63,80,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"));
        pokeList.add( new  Pokemon(9,"blastoise","A2CFF0",83,100,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"));

        return  pokeList;
    }

    @GetMapping("/pokemons/{id}") public Pokemon findAllById(@PathVariable("id") Integer id){

        Optional<Pokemon>  pokeFind = pokeList.stream().filter(pokeID -> pokeID.getId() == id).findFirst();
        if (pokeFind.isPresent()) {
            return pokeFind.get();
        }
        return null;
    }
}
