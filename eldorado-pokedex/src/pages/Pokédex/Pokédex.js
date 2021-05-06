import React, { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import Search from "./Search/Search";
import { Container, Title } from "./Stylespokedex";
import { getAllPokemon, getPokemon } from "../../service/api";
import Footer from "../../components/footer/Footer";

function Pokédex() {
  const [pokemonData, setPokemonData] = useState([]);
  

  const [active, setActive] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [search, setSearch] = useState("");
  const offset = 9;
  const initialURL = `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${
    currentOffset * offset
  }`;


 console.log(pokemonData)
  const handleInputSearch = (name) => {
    setSearch(name);
  };

  const Searchpokemon = async (name) => {

    
    var regex = `${search}`;
    var isSuggestedPokemon = new RegExp(regex, "g");

    let response = await getAllPokemon(
      "https://pokeapi.co/api/v2/pokemon?limit=200"
    );
    let suggestedPokemons = [];
    response.results.forEach((data) => {
      if (data.name.match(isSuggestedPokemon)) {
        suggestedPokemons.push(data);
      }
    });
    await loadPokemon(suggestedPokemons);

    if(!search===''){
      return <h1>erro</h1>
    }

    console.log("suggestedPokemons ", suggestedPokemons);
  
  };

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

  const nextPagePokemon = async () => {
    const currentOffsetAux = currentOffset + 1;
    setCurrentOffset(currentOffset + 1);
    setActive(active + 1);
    let response = await getAllPokemon(
      `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${
        currentOffsetAux * offset
      }`
    );
    await loadPokemon(response.results);
  };

  const previousPagePokemon = async () => {
    const currentOffsetAux = currentOffset - 1;
    setCurrentOffset(currentOffset - 1);
    setActive(active - 1);
    let response = await getAllPokemon(
      `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${
        currentOffsetAux * offset
      }`
    );
    await loadPokemon(response.results);
  };

  return (
    <>
      <Container>
        <Title>
          <h3>Pokemons para você escolher o seu favorito</h3>
        </Title>
        <Search
          handleInputSearch={handleInputSearch}
          Searchpokemon={Searchpokemon}
        />
        <Cards
          pokemonData={pokemonData}
          previousPagePokemon={previousPagePokemon}
          nextPagePokemon={nextPagePokemon}
          active={active}
        />
      </Container>
      <Footer/>
    </>
  );
}

export default Pokédex;
