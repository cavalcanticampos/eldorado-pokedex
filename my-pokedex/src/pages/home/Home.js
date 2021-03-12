import React from "react";
import "./Home.css";
import Banner from '../../assets/Banner.png'

function Home() {
  return (
    <div className="container-home">

      <div className="content-home">

        <section className="home-section">

          <h1>
            Find all your <br /> favorite Pokemon
            <br />
          </h1>
          <h2>
            You can know the type of Pokemon,
            <br /> its strengths, disadvantages and
            <br /> abilities
          </h2>
          <button><p>see pokemons</p></button>

        </section>
        <article>
        <img src={Banner}  alt="banner" className ="banner-home"/>
        </article>

      </div>
    </div>
  );
}

export default Home;
