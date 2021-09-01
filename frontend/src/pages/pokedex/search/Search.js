import React from "react";
import { usePoke } from "../../../components/context/Provider";

import { InputSearch } from "./StylesSearch";

export default function Search({ Searchpokemon }) {




  const { setSearch } = usePoke()
  return (
    <>

      <form onSubmit={e => e.preventDefault()}>
        <InputSearch>
          <input
            placeholder="Encontre seu pokemon.."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={Searchpokemon} type="text" >Buscar</button>
        </InputSearch>
      </form>

    </>
  );
}