import React from "react";

import { InputSearch } from "./StylesSearch";

export default function Search({ handleInputSearch, Searchpokemon }) {
  return (
    <>
      <InputSearch>
        <input
          placeholder="Eyncontre seu pokemon.."
          type="text"
          onChange={(e) => handleInputSearch(e.target.value)}
        />
        <button onClick={Searchpokemon}>Buscar</button>
      </InputSearch>
    </>
  );
}
