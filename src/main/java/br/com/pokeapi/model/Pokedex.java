package br.com.pokeapi.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data


public class Pokedex {


    private  Integer id;
    private String name;
    private String backgroundColor;
    private int attack;
    private int defense;
    private String type;
    private String  url;

    public Pokedex(Integer id, String name, String backgroundColor, int attack, int defense, String type, String url) {
        this.id = id;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.attack = attack;
        this.defense = defense;
        this.type = type;
        this.url = url;
    }
}
