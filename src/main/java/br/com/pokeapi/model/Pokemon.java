package br.com.pokeapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Pokemon {

     private Integer id;
     private String name;
     private String backgroundColor;
     private int attack;
     private int defense;
     private String type;
     private String url;

}
