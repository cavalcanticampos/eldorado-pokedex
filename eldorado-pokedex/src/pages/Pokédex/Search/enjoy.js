 //   const handleSearchPokemon = () =>{
  //      const pokemonFilter = pokemonData.filter(pokemons=>pokemons.name===search)

  //      setPokemonData(pokemonFilter)
  // }

  useEffect(() => {
    if (search==="") {
      setPokemonData(POKEMON_DEFAULT);
    }
  },[search]);