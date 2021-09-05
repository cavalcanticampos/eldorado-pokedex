package br.com.pokeapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PokemonsAttributes {

     private List<Type> types;
     private SpritesOther sprites;
     private List<Stats>  stats;
     private String  backgroundColor;

}
