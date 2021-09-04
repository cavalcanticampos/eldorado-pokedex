import { createContext, useState, useContext } from "react";
import React from "react";

const PokemonContext = createContext();

export default function PokeProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(1);
  const [initial, setInitial] = useState([]);
  const [filteredData, setFilteredData] = useState(pokemonData);
  const [initialdatapokemon, setInitialdatapokemon] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonData,
        setPokemonData,
        search,
        setSearch,
        active,
        setActive,
        currentOffset,
        setCurrentOffset,
        initial,
        setInitial,
        filteredData,
        setFilteredData,
        initialdatapokemon,
        setInitialdatapokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePoke() {
  const context = useContext(PokemonContext);
  const {
    pokemonData,
    setPokemonData,
    search,
    setSearch,
    setActive,
    active,
    currentOffset,
    setCurrentOffset,
    initial,
    setInitial,
    filteredData,
    setFilteredData,
    initialdatapokemon,
    setInitialdatapokemon,
  } = context;
  return {
    pokemonData,
    setPokemonData,
    search,
    setSearch,
    active,
    setActive,
    currentOffset,
    setCurrentOffset,
    initial,
    setInitial,
    filteredData,
    setFilteredData,
    initialdatapokemon,
    setInitialdatapokemon,
  };
}
