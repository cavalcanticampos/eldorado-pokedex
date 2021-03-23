import React from "react";
import Pagination from '../Pagination/Pagination';
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

export default function Cards({ pokemonData }) {
  return (

  

 

    <ContainerCard>
      <>
    {pokemonData.map((pokemon) => (

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
        <Grass>
          <span>grass</span>
          <span>poison</span>
        </Grass>
      </Column>

      <Image>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </Image>
    </Wrapper>
        
      ))}
      </>
      <Pagination/>
      </ContainerCard>
   
  );
}
