import React from "react";
import { usePoke } from "../../../Context/Provider";

import { InputSearch } from "./StylesSearch";

export default function Search({ Searchpokemon }) {
   const {setSearch} =usePoke()
  return (
    <>
      <InputSearch>
        <input
          placeholder="Encontre seu pokemon.."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={Searchpokemon}>Buscar</button>
      </InputSearch>
    </>
  );
}
