import React from "react";

import {
  ContainerCard,
  Wrapper,
  Column,
  Skill,
  Attack,
  Defese,
  Grass,
  Image,
} from "./StylesCard";
import { Container, Item } from "../Pagination/StylesPagination";

export default function Cards({pokemonData ,nextPagePokemon,previousPagePokemon,active}) {

  return (
    <>
      <ContainerCard>
        {pokemonData.map((pokemons) => (
          <Wrapper>
            <Column>
              <h3>{pokemons.name}</h3>
              <Skill>
                <Attack>
                  <span>409</span>
                  <p>Ataque</p>
                </Attack>

                <Defese>
                  <span>49</span>
                  <p>defesa</p>
                </Defese>
              </Skill>
              <Grass>
                <span>grass</span>
                <span>poison</span>
              </Grass>
            </Column>

            <Image>
              <img src={pokemons.sprites.front_default} alt={pokemons.name} />
            </Image>
          </Wrapper>
        ))}
      </ContainerCard>

      <Container>
        {active - 1 === 0 ? (
          ""
        ) : (
          <Item onClick={previousPagePokemon}>{active - 1}</Item>
        )}
        <Item>{active}</Item>
        <Item onClick={nextPagePokemon}>{active + 1}</Item>
      </Container>
    </>
  );
}
