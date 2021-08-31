package br.com.pokeapi.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@NoArgsConstructor
@Data
@Entity
@Table(name = "TB_POKEMONS")
    public class Pokemon extends  PokemonResults {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer  id;
    private String  name;
    private String  type;
    private String  sprite;
    private String  attack;
    private String  defense;
    private String  backgroundColor;

    public Pokemon(Integer id, String name, String type, String sprite, String attack, String defense, String backgroundColor) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.sprite = sprite;
        this.attack = attack;
        this.defense = defense;
        this.backgroundColor = backgroundColor;
    }
}
