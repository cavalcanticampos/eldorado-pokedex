package br.com.pokeapi.repository;

import br.com.pokeapi.model.Pokemon;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryResultData extends JpaRepository<Pokemon, Integer> {



}
