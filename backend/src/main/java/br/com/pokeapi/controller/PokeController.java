package br.com.pokeapi.controller;
import br.com.pokeapi.controller.dto.PokemonDto;
import br.com.pokeapi.model.*;
import br.com.pokeapi.repository.RepositoryResultData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.io.IOException;
import java.util.*;

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


    
    public List getAll(PokemonResults pokemonResults) throws IOException {
        int i;
        List<Pokemon> findAll = new ArrayList<>();
        Pokemonsattributes pokeAttributes;

        CloseableHttpClient httpClient = HttpClients
                .custom()
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
        requestFactory.setHttpClient(httpClient);

        RestTemplate res = new RestTemplate(requestFactory);

        pokemonResults =
                res.getForObject(
                        "https://pokeapi.co/api/v2/pokemon?limit=1117&offset=0",
                        PokemonResults.class
                );
        List<Result> results = pokemonResults.getResults();

        for (i = 0; i < results.size(); i++) {
            pokeAttributes =
                    res.getForObject(results.get(i).getUrl(), Pokemonsattributes.class);

            System.out.println();
            String grass = "grass";
            String normal = "normal";
            String fighting = "fighting";
            String flying = "flying";
            String poison = "poison";
            String ground = "ground";
            String rock = "rock";
            String bug = "bug";
            String ghost = "ghost";
            String steel = "steel";
            String fire = "fire";
            String water = "water";
            String electric = "electric";
            String psychic = "psychic";
            String ice = "ice";
            String dragon = "dragon";
            String dark = "dark";
            String fairy = "fairy";
            String unknown = "unknown";
            String shadow = "shadow";

            if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            grass
                    )
            ) {
                pokeAttributes.setBackgroundColor("#70A83B");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            normal
                    )
            ) {
                pokeAttributes.setBackgroundColor("#76AADB");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            fighting
                    )
            ) {
                pokeAttributes.setBackgroundColor("#F76545");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            flying
                    )
            ) {
                pokeAttributes.setBackgroundColor("#76AADB");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            poison
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A974BC");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            ground
                    )
            ) {
                pokeAttributes.setBackgroundColor("#9B897B");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            rock
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A1A1A1");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            bug
                    )
            ) {
                pokeAttributes.setBackgroundColor("#70A83B");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            ghost
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A974BC");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            steel
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A1A1A1");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            fire
                    )
            ) {
                pokeAttributes.setBackgroundColor("#F76545");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            water
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A2CFF0");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            electric
                    )
            ) {
                pokeAttributes.setBackgroundColor("#F7C545");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            psychic
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A974BC");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            ice
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A2CFF0");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            dragon
                    )
            ) {
                pokeAttributes.setBackgroundColor("#F76545");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            dark
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A1A1A1");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            fairy
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A974BC");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            unknown
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A1A1A1");
            } else if (
                    Objects.equals(
                            pokeAttributes.getTypes().get(0).getType().getName(),
                            shadow
                    )
            ) {
                pokeAttributes.setBackgroundColor("#A974BC");
            }

            Pokemon pokemonAll = new Pokemon();

            pokemonAll.setType(pokeAttributes.getTypes().get(0).getType().getName());
            pokemonAll.setSprite(
                    pokeAttributes
                            .getSprites()
                            .getOther()
                            .getDream_world()
                            .getFront_default()
            );
            pokemonAll.setAttack(pokeAttributes.getStats().get(1).getBase_stat());
            pokemonAll.setDefense(pokeAttributes.getStats().get(2).getBase_stat());
            pokemonAll.setBackgroundColor(pokeAttributes.getBackgroundColor());
            pokemonAll.setName(results.get(i).getName());
            repository.save(pokemonAll);
            findAll.add(pokemonAll);
        }
        return findAll;
    }

    @GetMapping("/pokemons")
    @ApiOperation(
            "Essa rota retorna uma  lista de todos os pokemons vindo do banco de dados podendo passa um argumento PAGE para pagina??ao"
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

        System.out.println(pokemon.size());
        return  PokemonDto.converter(pokemon.subList(fromIndex, Math.min(fromIndex + pageSize, pokemon.size()))) ;

    }

    @GetMapping("/pokemon/{id}")
    @ApiOperation(value ="Retorna um unico pokemon")
    public ResponseEntity<Pokemon> findById(@PathVariable Integer id){
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/createPokemon")
    @ApiOperation("Cria  um novo pokemon")
    public Pokemon create(@RequestBody Pokemon pokemon){
        return repository.save(pokemon);
    }

    @PutMapping("/pokemon/{id}")
    @ApiOperation("Atualiza um pokemon")
    public ResponseEntity update(@PathVariable("id") Integer id,
                                 @RequestBody Pokemon pokemon) {
        return repository.findById(id)
                .map(pokemons -> {
                    pokemons.setName(pokemon.getName());
                    pokemons.setType(pokemon.getType());
                    pokemons.setSprite(pokemon.getSprite());
                    pokemons.setAttack(pokemon.getAttack());
                    pokemons.setDefense(pokemon.getDefense());
                    pokemons.setBackgroundColor(pokemon.getBackgroundColor());

                    Pokemon updated = repository.save(pokemons);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/pokemon/{id}")
    @ApiOperation("Deleta um pokemon")
    public ResponseEntity <?> delete(@PathVariable Integer id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }


  }





