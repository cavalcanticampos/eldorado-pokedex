import React, { useEffect } from 'react'
import Cards from './cards/Cards'

import { Container, Title } from './Stylespokedex'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { usePoke } from '../../components/context/Provider'
import Search from './search/Search'
import api from '../../service/api'


function Pokedex() {
  const {

    setPokemonData,
    search,
    active,
    setActive,
    currentOffset,
    setCurrentOffset,
    pokemonData,


  } = usePoke()



  useEffect(() => {
    async function loadPokemon() {
      api.get(`/pokemons?page=${currentOffset}`)
        .then(response => {
          console.log(response.data)
          setPokemonData(response.data);
        })
        .catch(error => {
          console.log('Error getting fake data: ' + error);
        })


    }
    loadPokemon()
  }, [currentOffset])


  const Searchpokemon = async (name) => {

    var regex = `${search}`
    var isSuggestedPokemon = new RegExp(regex, 'ig')

    const response = await api.get(
      `/pokemons?page=${currentOffset}`
    )
    let suggestedPokemons = []
    pokemonData.forEach((data) => {
      if (data.name.match(isSuggestedPokemon)) {
        suggestedPokemons.push(data)
      }
    })
    setPokemonData(suggestedPokemons)
    console.log('suggestedPokemons ', suggestedPokemons)
    return suggestedPokemons;

  }



  const nextPagePokemon = () => {

    setCurrentOffset(currentOffset + 1)
    setActive(active + 1)
    api.get(
      `/pokemons?page=${currentOffset}`
    )

  }

  const previousPagePokemon = () => {

    setCurrentOffset(currentOffset - 1)
    setActive(active - 1)
    api.get(
      `/pokemons?page=${currentOffset}`
    )

  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h3>Pokemons para você escolher o seu favorito</h3>
        </Title>
        <Search Searchpokemon={Searchpokemon} />
        <Cards
          nextPagePokemon={nextPagePokemon}
          previousPagePokemon={previousPagePokemon}

        />
        <Footer />
      </Container>
    </>
  )
}

export default Pokedex
