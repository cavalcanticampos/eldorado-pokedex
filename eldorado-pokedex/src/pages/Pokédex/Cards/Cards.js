import React from 'react'

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

  
  return (
    <>
      <ContainerCard >
        {pokemonData.map((pokemon) => (
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

              <CardTag>
                <span>{pokemon.types[0].type.name}</span>
              </CardTag>
            </CardSkill>

            <CardImg>
              
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
