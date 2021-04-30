import React from "react";
import Banner from "../../assets/Banner.png";
import BannerComplete from "../../assets/BannerComplete.svg";
import Footer from "../../components/Footer";
import { Container, GroupHome, StyledLink, WrapperHome ,HeroImg, HeroImgFull} from "./HomeStyles";

function Home() {
  return (
    <Container>
      <WrapperHome className="content-home">
      <HeroImgFull src={BannerComplete} alt="BannerComplete" className="img-full"/>
        <GroupHome>
          <p>
            <strong>Encontre</strong> todos os seus favoritos{" "}
            <strong>Pokémon</strong>
          </p>
          <h2>
            Você pode saber o tipo de Pokémon, seus pontos fortes,
            desvantagens e habilidades
          </h2>
          <button>
            <StyledLink to="/pokedex">
              <span>ver pokemons</span>
            </StyledLink>
          </button>
          <HeroImg src={Banner} alt="banner" className="banner-home" />
        </GroupHome>
        <Footer />
      </WrapperHome>
    </Container>
  );
}

export default Home;
