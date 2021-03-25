import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../../service/api";
import Cards from "../Cards/Cards";
import { InputSearch } from "./StylesSearch";

export default function Search() {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtersearch, setFiltersearch] = useState([]);

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

  useEffect(() => {
    setFiltersearch(
      pokemonData.filter((pokemons) =>
        pokemons.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemonData]);

  return (
    <>
      <InputSearch>
        <input
          placeholder="Encontre seu pokemon.."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputSearch>
      <Cards filtersearch={filtersearch} />
    </>
  );
}
