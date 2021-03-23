import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../../service/api";
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
import { Container, Item } from '../Pagination/StylesPagination'

export default function Cards() {
  const [pokemonData, setPokemonData] = useState([]);
  const [active, setActive] = useState(1)
  const [currentOffset, setCurrentOffset] = useState(0)
  const offset = 9;
  const initialURL = `https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${currentOffset*offset}`;

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const nextPagePokemon = async () => {
    const currentOffsetAux = currentOffset+1
    setCurrentOffset(currentOffset+1)
    setActive(active+1)
    let response = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${currentOffsetAux*offset}`);
    await loadPokemon(response.results);
  }

  const previousPagePokemon = async () => {
    const currentOffsetAux = currentOffset-1
    setCurrentOffset(currentOffset-1)
    setActive(active-1)
    let response = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon?limit=9S&offset=${currentOffsetAux*offset}`);
    await loadPokemon(response.results);
  }

  return (
    <>
      <ContainerCard>
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
        </ContainerCard>

        {/* pagination */}
        <Container>
            {
                active - 1 === 0 ?
                '' :
                <Item onClick={previousPagePokemon}>
                    {active - 1}
                </Item> 
            }
            <Item>
                {active}
            </Item> 
            <Item onClick={nextPagePokemon}>
                {active + 1}
            </Item> 
        </Container>
        {/* pagination */}
    </>
  );
}
