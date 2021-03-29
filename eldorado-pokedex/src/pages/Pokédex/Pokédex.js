import React from "react";
import Cards from "./Cards/Cards";
import Search from "./Search/Search";
import { Container, Title } from "./Stylespokedex";


function Pokédex() {



  return (
    <>
      <Container>
        <Title>
          <h3>Pokémons para você escolher o seu favorito</h3>
        </Title>
        <Search />
        <Cards />
      </Container>
    </>
  );
}

export default Pokédex;
