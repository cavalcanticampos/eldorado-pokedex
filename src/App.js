import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Pokedex from "./pages/pokedex/Pokedex";
import { ContainerGlobal, GlobalStyle } from "./StylesGlobal";
import PokeProvider from "./components/context/Provider";
import CreatingPokemon from "./pages/creatingPokemon/CreatingPokemon";
import EditPokemon from "./pages/editPokemon/EditPokemon";

function App() {
  return (
    <>
      <PokeProvider>
        <Router>
          <GlobalStyle />

          <ContainerGlobal>
            <Route path="/" exact component={Home} />
            <Route path="/Pokedex" component={Pokedex} />
            <Route path="/Creating" component={CreatingPokemon} />
            <Route path="/edit/:id" component={EditPokemon} />
          </ContainerGlobal>
        </Router>
      </PokeProvider>
    </>
  );
}

export default App;