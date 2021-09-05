package br.com.pokeapi.model;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class PokemonResults {

  private List<Result> results;

  public PokemonResults(List<Result> results) {
    this.results = results;
  }
}
