import React, { useEffect } from 'react'
import Cards from './Cards/Cards'
import Search from './Search/Search'
import { Container, Title } from './Stylespokedex'
import { getAllPokemon, getPokemon } from '../../service/api'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { usePoke } from '../../Context/Provider'


function Pokédex() {
  const {
    pokemonData,
    setPokemonData,
    search,
    active,
    setActive,
    currentOffset,
    setCurrentOffset,
  } = usePoke()

  const offset = 9
  const initialURL = `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${
    currentOffset * offset
  }`
  console.log(pokemonData)

  const Searchpokemon = async (name) => {
 
    var regex = `${search}`
    var isSuggestedPokemon = new RegExp(regex,'ig')

    let response = await getAllPokemon(
      'https://pokeapi.co/api/v2/pokemon?limit=200',
    )
    let suggestedPokemons = []
    response.results.forEach((data) => {
      if (data.name.match(isSuggestedPokemon)) {
        suggestedPokemons.push(data)
      }
    })
    await loadPokemon(suggestedPokemons)

    console.log('suggestedPokemons ', suggestedPokemons)
  }

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results)
    }
    fetchData()
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
      }),
    )
    setPokemonData(_pokemonData)
  }

  const nextPagePokemon = async () => {
    const currentOffsetAux = currentOffset + 1
    setCurrentOffset(currentOffset + 1)
    setActive(active + 1)
    let response = await getAllPokemon(
      `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${
        currentOffsetAux * offset
      }`,
    )
    await loadPokemon(response.results)
  }

  const previousPagePokemon = async () => {
    const currentOffsetAux = currentOffset - 1
    setCurrentOffset(currentOffset - 1)
    setActive(active - 1)
    let response = await getAllPokemon(
      `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${
        currentOffsetAux * offset
      }`,
    )
    await loadPokemon(response.results)
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
          previousPagePokemon={previousPagePokemon}
          nextPagePokemon={nextPagePokemon}
        />
        <Footer />
      </Container>
    </>
  )
}

export default Pokédex
