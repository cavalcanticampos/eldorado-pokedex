package br.com.pokeapi.repository;

import br.com.pokeapi.model.Pokemons;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonsRepository extends JpaRepository<Pokemons,Integer> {
}
