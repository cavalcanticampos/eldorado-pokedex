package br.com.pokedexApi.pokedexapi.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pokemon {
    private Long id;
    private String name;
    private String type;
    private String backgroundcolor;
    private String atack;
    private String defese;
    private String url;




}
