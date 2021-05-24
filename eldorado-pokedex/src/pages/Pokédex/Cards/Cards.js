import React, { useEffect, useState } from 'react'

import {
  ContainerCard,
  WrapperCards,
  CardSkill,
  CardsTitle,
  CardsPropContainer,
  CardSkillItems,
  CardTag,
  CardImg
} from './StylesCard'
import { Container, Item } from '../Pagination/StylesPagination'
import { usePoke } from '../../../Context/Provider'
export default function Cards({ nextPagePokemon, previousPagePokemon }) {
  const { pokemonData, active } = usePoke()
  const [pokedex, setPokedex] = useState([])

  const fetchPokemonType = () => {
    const pokeAux = pokemonData.map((pokemon) => {

      if (pokemon.types[0].type.name === 'fire') {
        pokemon = ({ ...pokemon,  backgroundColor: 'red', color: 'white'})
      } else  if (pokemon.types[0].type.name === 'water') {
        pokemon = ({ ...pokemon,  backgroundColor: 'blue', color: 'white'})
      } else {
        pokemon = ({ ...pokemon,  backgroundColor: '#73d677', color: 'white'})
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
      <ContainerCard >
        {pokedex.map((pokemon) => (
          <WrapperCards key={pokemon.id}> 
            <CardSkill>
              <CardsTitle>{pokemon.name}</CardsTitle>
              <CardsPropContainer>
                <span className="firt-child">48</span>
                <span>49</span>
              </CardsPropContainer>

              <CardSkillItems>
                <span>Attack</span>
                <span>Defense</span>
              </CardSkillItems>

              <CardTag pokeTypeColor={pokemon.backgroundColor} josaph={pokemon.color}>
                <span>{pokemon.types[0].type.name}</span>
              </CardTag>
            </CardSkill>

            <CardImg backgroundColor={pokemon.backgroundColor}>
              <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            </CardImg>
          </WrapperCards>
        ))}
      </ContainerCard>

      <Container>
        {active - 1 === 0 ? (
          ''
        ) : (
          <Item onClick={previousPagePokemon}>{active - 1}</Item>
        )}
        <Item>{active}</Item>
        <Item onClick={nextPagePokemon}>{active + 1}</Item>
      </Container>
    </>
  )
}
