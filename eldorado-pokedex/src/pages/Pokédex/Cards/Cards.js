import React from "react";
import "./Cards.css";

export default function Cards({ Pokemonsdata, loading }) {
  return (
    <div className="container-cards">
      {loading ? (
        <div class="lds-circle">
          <div></div>
        </div>
      ) : (
        <>
          {Pokemonsdata.map((pokemon) => (
            <div className="content-cards">
              <div className="cards-col">
                <h3 className="cards-title">{pokemon.name}</h3>
                <div className="skills">
                  <div className="attack">
                    <span className="cards-value">409</span>
                    <p className="skills-pokemons">Ataque</p>
                  </div>

                  <div className="defese">
                    <span className="cards-value">49</span>
                    <p className="skills-pokemons">defesa</p>
                  </div>
                </div>
                <div className="grass">
                  <span className="grass-p">grass</span>
                  <span className="poison-p">poison</span>
                </div>
              </div>

              <div className="container-img">
                <img
                  className="img-cards"
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
