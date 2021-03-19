import React from "react";
import "./Home.css";
import Banner from "../../assets/Banner.png";

function Home() {
  return (
    <div className="container-home">
      <div className="content-home">
        <section className="home-section">
          <h1>
            Encontre todos os seus <br/> Pokémon favoritos
            
          </h1>
          <h2>
          Você pode saber o tipo de Pokémon,,
            <br /> seus pontos fortes, desvantagens e
            <br /> habilidades
          </h2>
          <button>
            <p>Ver pokemons</p>
          </button>
        </section>
        <article>
          <img src={Banner} alt="banner" className="banner-home" />
        </article>
      </div>
    </div>
  );
}

export default Home;
