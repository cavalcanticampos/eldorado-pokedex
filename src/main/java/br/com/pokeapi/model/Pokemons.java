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
@Table(name = "TB_POKEMON")
public class Pokemons {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer  id;
    private String   name;
    private String   type;
    private String attack;
    private String  defese;
    private String  backgroundColor;
}
