import React from "react";

import {
  Container,
  Wrapper,
  Column,
  Skill,
  Attack,
  Defese,
  Grass,
  Image,
} from "./StylesCard";

export default function Cards({ Pokemonsdata, loading }) {
  return (
    <Container>
      {loading ? (
            <h4>Carregando.....</h4>
      ) : (
        <>
          {Pokemonsdata.map((pokemon) => (
            <Wrapper>
              <Column>
                <h3>{pokemon.name}</h3>
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
                <Grass >
                  <span >grass</span>
                  <span>poison</span>
                </Grass>
              </Column>

              <Image>
                <img
                  
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                />
              </Image>
            </Wrapper>
          ))}
        </>
      )}
    </Container>
  );
}
