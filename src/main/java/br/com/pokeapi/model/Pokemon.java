package br.com.pokeapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "TB_POKEMONS")
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer  id;
    private String name;
   // private List<Type> types;
   // private SpritesOther sprites;
   // private List<Stats>  stats;
   // private String  backgroundColor;

}
