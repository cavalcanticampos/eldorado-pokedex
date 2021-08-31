package br.com.pokeapi.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Stats {

    private String  base_stat;
    private StatsPokemon  stat;

}
