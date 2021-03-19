import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../../service/api";
import Cards from "../Cards/Cards";

import { Container ,Wrapper } from "./StylesSearch";

export default function Search() {
  const [Pokemonsdata, setPokemonsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
 
  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=200";

  useEffect(() => {
     

   
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      await loadPokemon(response.results);
      setLoading(false);
      console.log(response);
    }
    fetchData();
  }, [search]);

  const loadPokemon = async (data) => {
    let _pokemonsdata = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonsdata(_pokemonsdata);
  };

  console.log(Pokemonsdata);

  return (
    <Container>
      <Wrapper>
        <h3 className="search-title">
        800 Pokémons para você escolher o seu favorito
        </h3>

        <input 
        placeholder="Encontre seu pokémon" 
        className="input-search" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      </Wrapper>
      <Cards Pokemonsdata={Pokemonsdata} loading={loading} />
    </Container>
  );
}
