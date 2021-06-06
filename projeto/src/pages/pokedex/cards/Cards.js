import React, { useEffect, useState } from 'react'

import {
  ContainerCard,
  WrapperCards,
  CardSkill,
  CardsTitle,
  CardsPropContainer,
  CardSkillItems,
  CardTag,
  CardImg,
} from './StylesCard'
import { Container, Item } from '../pagination/StylesPagination'
import { colors } from '../../../colorstyles'
import { usePoke } from '../../../components/context/Provider'
export default function Cards({ nextPagePokemon, previousPagePokemon }) {
  const { pokemonData, active } = usePoke()
  const [pokedex, setPokedex] = useState([])

  console.log(pokemonData)
  const fetchPokemonType = () => {
    const pokeAux = pokemonData.map((pokemon) => {
      if (pokemon.types[0].type.name === 'fire') {
        pokemon = { ...pokemon, backgroundColor: colors.fire }
      } else if (pokemon.types[0].type.name === 'water') {
        pokemon = { ...pokemon, backgroundColor: colors.water, color: 'white' }
      } else if (pokemon.types[0].type.name === 'steel') {
        pokemon = { ...pokemon, backgroundColor: colors.steel, color: 'white' }
      } else if (pokemon.types[0].type.name === 'dark') {
        pokemon = { ...pokemon, backgroundColor: colors.dark, color: 'white' }
      } else if (pokemon.types[0].type.name === 'rock') {
        pokemon = { ...pokemon, backgroundColor: colors.rock, color: 'white' }
      } else if (pokemon.types[0].type.name === 'ice') {
        pokemon = { ...pokemon, backgroundColor: colors.ice, color: 'white' }
      } else if (pokemon.types[0].type.name === 'fighting') {
        pokemon = {
          ...pokemon,
          backgroundColor: colors.dark,
          color: 'fighting',
        }
      } else if (pokemon.types[0].type.name === 'dragon') {
        pokemon = { ...pokemon, backgroundColor: colors.dragon, color: 'white' }
      } else if (pokemon.types[0].type.name === 'bug') {
        pokemon = { ...pokemon, backgroundColor: colors.bug, color: 'white' }
      } else if (pokemon.types[0].type.name === 'normal') {
        pokemon = { ...pokemon, backgroundColor: colors.normal, color: 'white' }
      } else if (pokemon.types[0].type.name === 'gosth') {
        pokemon = { ...pokemon, backgroundColor: colors.gosth, color: 'white' }
      } else if (pokemon.types[0].type.name === 'poison') {
        pokemon = { ...pokemon, backgroundColor: colors.posion, color: 'white' }
      } else if (pokemon.types[0].type.name === 'psychic') {
        pokemon = {
          ...pokemon,
          backgroundColor: colors.psychic,
          color: 'white',
        }
      } else if (pokemon.types[0].type.name === 'fairy') {
        pokemon = { ...pokemon, backgroundColor: colors.fairy, color: 'white' }
      } else if (pokemon.types[0].type.name === 'ghost') {
        pokemon = { ...pokemon, backgroundColor: colors.ghost, color: 'white' }
      } else if (pokemon.types[0].type.name === 'ground') {
        pokemon = { ...pokemon, backgroundColor: colors.ground, color: 'white' }
      } else if (pokemon.types[0].type.name === 'electric') {
        pokemon = {
          ...pokemon,
          backgroundColor: colors.electric,
          color: 'white',
        }
      } else if (pokemon.types[0].type.name === 'grass') {
        pokemon = { ...pokemon, backgroundColor: colors.grass, color: 'white' }
      }

      return pokemon
    })

    setPokedex(pokeAux)
  }

  useEffect(() => {
    fetchPokemonType()
  }, [pokemonData])

  return (
    <>
      <ContainerCard>
        {pokedex.map((pokemon) => (
          <WrapperCards key={pokemon.id}>
            <CardSkill>
              <CardsTitle>{pokemon.name}</CardsTitle>
              <CardsPropContainer>
                <span className="firt-child">{pokemon.stats[1].base_stat}</span>
                <span>{pokemon.stats[2].base_stat}</span>
              </CardsPropContainer>

              <CardSkillItems>
                <span>Ataque</span>
                <span>Defesa</span>
              </CardSkillItems>

              <CardTag
                pokeTypeColor={pokemon.backgroundColor}
                josaph={pokemon.color}
              >
                <span>{pokemon.types[0].type.name}</span>
              </CardTag>
            </CardSkill>

            <CardImg backgroundColor={pokemon.backgroundColor}>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
            </CardImg>
          </WrapperCards>
        ))}
      </ContainerCard>

      <Container>
        {active - 1 === 0 ? (
          ''
        ) : (
          <Item   onClick={previousPagePokemon}>{active - 1}</Item>
        )}
        <Item isSelected = {active}>{active}</Item>
        <Item  onClick={nextPagePokemon}>{active + 1}</Item>
      </Container>
    </>
  )
}
