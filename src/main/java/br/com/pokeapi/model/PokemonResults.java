package br.com.pokeapi.model;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
public class PokemonResults{
  private  List<Result> results;

  public PokemonResults(List<Result> results) {
    this.results = results;
  }
}
