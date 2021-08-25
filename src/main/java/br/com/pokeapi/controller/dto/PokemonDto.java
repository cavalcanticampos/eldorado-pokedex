package br.com.pokeapi.controller.dto;


import br.com.pokeapi.model.Pokemon;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor

public class PokemonDto {
    private Integer  id;
    private String  name;
    private String  type;
    private String  sprite;
    private String  attack;
    private String  defense;
    private String  backgroundColor;

    public PokemonDto(Pokemon pokemon) {
        this.id = pokemon.getId();
        this.name = pokemon.getName();
        this.type = pokemon.getType();
        this.sprite = pokemon.getSprite();
        this.attack =  pokemon.getAttack();
        this.defense = pokemon.getDefense();
        this.backgroundColor = pokemon.getBackgroundColor();
    }


    public static List<PokemonDto> converter(List<Pokemon> pokemon) {
        return pokemon.stream().map(PokemonDto::new).collect(Collectors.toList());
    }

}
