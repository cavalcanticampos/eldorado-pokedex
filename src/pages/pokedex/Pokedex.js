import React, { useEffect, useState } from "react";
import Cards from "./cards/Cards";
import { Container, Title, StyledLink ,StyledLinke} from "./Stylespokedex";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { usePoke } from "../../components/context/Provider";
import Search from "./search/Search";
import api from "../../service/Api";
import { useLocation, useHistory, Link } from "react-router-dom";
import qs from "query-string";
import {MdCreate} from 'react-icons/md'

function Pokedex() {
  const {
    setPokemonData,
    search,
    active,
    setActive,
    pokemonData,
    setInitialdatapokemon,
    initialdatapokemon,
  } = usePoke();
  
  let location = useLocation();
  let history = useHistory();
  const [actualPage, setActualPage] = useState(getActualPage() || 1);

  function getActualPage() {
    const queryParams = qs.parse(location.search);
    const page = queryParams.page;
    return page ? Number(page) : undefined;
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    history.push({
      search: qs.stringify({
        ...queryParams,
        page: actualPage,
      }),
    });
  }, [actualPage]);

  useEffect(() => {
    if (!search) {
      setPokemonData(initialdatapokemon);
      return;
    }
  }, [search]);

  useEffect(() => {
    async function loadPokemon() {
      api
        .get(`/pokemons?page=${actualPage}`)
        .then((response) => {
          console.log(response.data);
          setPokemonData(response.data);
          setInitialdatapokemon(response.data);
        })
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    }
    loadPokemon();
  }, [actualPage]);

  const Searchpokemon = async () => {
    var regex = `${search}`;
    var isSuggestedPokemon = new RegExp(regex, "ig");

    let suggestedPokemons = [];
    pokemonData.forEach((data) => {
      if (data.name.match(isSuggestedPokemon)) {
        suggestedPokemons.push(data);
      }
    });
    setPokemonData(suggestedPokemons);
    console.log("suggestedPokemons ", suggestedPokemons);
    return suggestedPokemons;
  };

  const nextPagePokemon = () => {
    setActualPage((prevState) => prevState + 1);
    setActive(active + 1);
  };

  const previousPagePokemon = () => {
    setActualPage((prevState) => prevState - 1);
    setActive(active - 1);
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h3>Pokemons para escolher  ou criar aqui &nbsp; <StyledLinke to="/Creating" ><MdCreate/></StyledLinke>  </h3>
          
        </Title>

        <Search Searchpokemon={Searchpokemon} />
        <Cards
          nextPagePokemon={nextPagePokemon}
          previousPagePokemon={previousPagePokemon}
          actualPage={actualPage}
        />

        <Footer />
      </Container>
    </>
  );
}

export default Pokedex;
