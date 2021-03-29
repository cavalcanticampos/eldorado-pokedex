import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../../service/api";
import { InputSearch } from "./StylesSearch";



export default function Search() {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");

  const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=100S&offset=0";

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
  console.log(search)

  const Searchpokemon = async () => {
  
    let response = await getAllPokemon(
      "https://pokeapi.co/api/v2/pokemon?limit=1200",
     );
     let suggestedPokemons = [];
    response.results.forEach((data) => {
      data.match(/`search`/) ? suggestedPokemons.push(data) : null
    });
    await loadPokemon(suggestedPokemons);

    console.log(response)
  };

  return (
    <>
      <InputSearch>
        <input
          placeholder="Eyncontre seu pokemon.."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={Searchpokemon}>Buscar</button>
      </InputSearch>
    </>
  );
}
