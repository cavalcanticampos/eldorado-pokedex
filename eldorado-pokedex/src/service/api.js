//useEffect(() => {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      //.then((res) => res.json())
      //.then((data) => {
        //setPokemon(data);
        //console.log(data);
      //});
  //}, []);

  export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}
