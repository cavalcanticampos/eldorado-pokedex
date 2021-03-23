import React from "react";
import Search from "./Search/Search";
import { Container, Wrapper } from "../Pokédex/Search/StylesSearch";
import Cards from '../Pokédex/Cards/Cards'

function Pokédex() {
  return (
    <>
      <Container>
        <Wrapper>
          <h3 className="search-title">
           100 Pokémons para você escolher o seu favorito
          </h3>
        </Wrapper>
      </Container>
      <Search />
      <Cards />
    </>
  );
}

export default Pokédex;
