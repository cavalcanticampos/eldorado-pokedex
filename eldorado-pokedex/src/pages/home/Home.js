import React from 'react'
import Banner from '../../assets/Banner.png'
import BannerComplete from '../../assets/BannerComplete.svg'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {
  Container,
  StyledLink,
  HeroImg,
  HeroImgFull,
  Text,
  Paragraph,
  Col,
} from './HomeStyles'

function Home() {
  return (
    <>
      <Container>
        <Header />
        <HeroImgFull src={BannerComplete} />
        <HeroImg src={Banner} />
        <Col>
          <Text>
            <strong>Encontre</strong> todos os seus favoritos{' '}
            <strong>Pokémon</strong>
          </Text>
          <Paragraph>
            Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens
            e habilidades
          </Paragraph>
          <button>
            <StyledLink to="/pokedex">
              <span>ver pokemons</span>
            </StyledLink>
          </button>
        </Col>
      </Container>
      <Footer />
    </>
  )
}

export default Home
