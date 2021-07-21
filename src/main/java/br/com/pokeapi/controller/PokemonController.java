package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokemon;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
@RequestMapping("/")
public class PokemonController {


    List<Pokemon>  pokeList = new ArrayList<>();

    Pokemon poke  = new Pokemon();


    @GetMapping("/pokemons")
    public  List<Pokemon>  findAllPoke( int page){


        List<Pokemon>  pokeList = new ArrayList<>(Arrays.asList(

                new  Pokemon(1,"Bulbassaur", "#70A83B",49,49,"grass","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"),
        new  Pokemon(2,"ivysaur","#70A83B",62,63,"grass","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"),
        new  Pokemon(3,"venusaur","#70A83B",82,83,"grass","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"),
        new  Pokemon(4,"charmander","  #F76545",52,43,"fire","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"),
        new  Pokemon(5,"charmeleon","  #F76545",64,58,"fire","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"),
        new  Pokemon(6,"charizard","  #F76545",84,78,"fire","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"),
        new  Pokemon(7,"squirtle","A2CFF0",48,65,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"),
        new  Pokemon(8,"wartortle","A2CFF0",63,80,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"),
        new  Pokemon(9,"blastoise","A2CFF0",83,100,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"),
        new  Pokemon(10,"pikachu","A2CFF0",83,100,"water","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg")


        ));



        int pageSize=9;
        int offeset = (page-1) * pageSize;
        if(pokeList == null || pokeList.size() <= offeset){
            return Collections.emptyList();
        }
        // toIndex exclusive
        return pokeList.subList(offeset, Math.min(offeset + pageSize,  pokeList.size()));


    }


    @GetMapping("/pokemons/{id}") public Pokemon findAllById(@PathVariable("id") Integer id){

        Optional<Pokemon>  pokeFind = pokeList.stream().filter(pokeID -> pokeID.getId() == id).findFirst();
        if (pokeFind.isPresent()) {
            return pokeFind.get();

        }
        return null;
    }




}
