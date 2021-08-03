package br.com.pokeapi.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@NoArgsConstructor
@Data


public class Pokedex {

    private  String  name;
    private String  url;
    private  Type type;
    private  Stats stat;
    private Integer base_stat;

    @Override
    public String toString() {
        return "Pokedex{" +
                "name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", type=" + type +
                ", stat=" + stat +
                ", base_stat=" + base_stat +
                '}';
    }

}
