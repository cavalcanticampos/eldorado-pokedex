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
  const { pokemonData, active,
    setCurrentOffset, } = usePoke()
 

  

  return (
    <>
      <ContainerCard>
        {pokemonData.map((pokemon) => (
          <WrapperCards key={pokemon.id}>
            <CardSkill>
              <CardsTitle>{pokemon.name}</CardsTitle>
              <CardsPropContainer>
                <span className="firt-child">{pokemon.attack}</span>
                <span>{pokemon.defense}</span>
              </CardsPropContainer>

              <CardSkillItems>
                <span>Ataque</span>
                <span>Defesa</span>
              </CardSkillItems>

              <CardTag
                pokeTypeColor={pokemon.backgroundColor}
                josaph={pokemon.color}
              >
                <span>{pokemon.type}</span>
              </CardTag>
            </CardSkill>

            <CardImg backgroundColor={pokemon.backgroundColor}>
              <img
                src={pokemon.sprite}
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
