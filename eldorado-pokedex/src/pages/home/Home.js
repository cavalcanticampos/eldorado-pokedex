import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/Banner.png";
import { Container, GroupHome, WrapperHome } from "./HomeStyles";

function Home() {
  return (
    <Container>
      <WrapperHome className="content-home">
        <GroupHome>
          <h1>
            Encontre todos os seus <br /> Pokémon favoritos
          </h1>
          <h2>
            Você pode saber o tipo de Pokémon,
            <br /> seus pontos fortes, desvantagens e
            <br /> habilidades
          </h2>
          <button>
            <Link to ="/pokedex">
              <p>Ver pokemons</p>
            </Link>
          </button>
        </GroupHome>
        <article>
          <img src={Banner} alt="banner" className="banner-home" />
        </article>
      </WrapperHome>
    </Container>
  );
}

export default Home;
