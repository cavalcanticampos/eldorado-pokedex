import React from "react";
import {
  ContainerCard,
  WrapperCards,
  CardSkill,
  CardsTitle,
  CardsPropContainer,
  CardSkillItems,
  CardTag,
  CardImg,
} from "./StylesCard";
import { Container, Item } from "../pagination/StylesPagination";
import { usePoke } from "../../../components/context/Provider";
export default function Cards({
  nextPagePokemon,
  previousPagePokemon,
  actualPage,
}) {
  const { pokemonData, active } = usePoke();

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
                <span>
                  Ataque
                </span>
                <span>
                  Defesa
                </span>
              </CardSkillItems>

              <CardTag
                pokeTypeColor={pokemon.backgroundColor}
                josaph={pokemon.color}
              >
                <span>{pokemon.type}</span>
              </CardTag>
            </CardSkill>

            <CardImg backgroundColor={pokemon.backgroundColor}>
              <img src={pokemon.sprite} alt={pokemon.name} />
            </CardImg>
          </WrapperCards>
        ))}
      </ContainerCard>

      <Container>
        {actualPage - 1 === 0 ? (
          ""
        ) : (
          <Item onClick={previousPagePokemon}>{actualPage - 1}</Item>
        )}
        <Item isSelected={active}>{actualPage}</Item>
        <Item onClick={nextPagePokemon}>{actualPage + 1}</Item>
      </Container>
    </>
  );
}
