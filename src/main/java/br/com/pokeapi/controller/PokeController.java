package br.com.pokeapi.controller;
import br.com.pokeapi.controller.dto.PokemonDto;
import br.com.pokeapi.model.*;
import br.com.pokeapi.repository.RepositoryResultData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@Api("Api Rest Pokemons")
@CrossOrigin(origins = "*")
public class PokeController {

    @Autowired
    RepositoryResultData repository;

    @GetMapping("/pokemons")
    @ApiOperation(
            "Essa rota retorna uma  lista de todos os pokemons vindo do banco de dados podendo passa um argumento PAGE para paginaçao"
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





