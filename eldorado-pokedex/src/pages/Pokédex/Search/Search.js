import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../../service/api";
import Cards from "../Cards/Cards";
import { Container, Wrapper, InputSearch, Container2 } from "./StylesSearch";

export default function Search() {
  const [pokemonData, setPokemonData] = useState([]);

  const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=9S&offset=0";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);
  return (
    <Container2>
      <InputSearch placeholder="Encontre seu pokémon" className="input-search" />
    </Container2>
  );
}

// // <Container>
    //   <Wrapper>
        {/* <h3 className="search-title">
          100 Pokémons para você escolher o seu favorito
        </h3> */}
      // </Wrapper>
      // <Cards  pokemonData={pokemonData}/>
    // </Container>
