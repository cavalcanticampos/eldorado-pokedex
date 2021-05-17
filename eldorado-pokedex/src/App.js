import {
 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import React from "react";

import Home from "./pages/home/Home";
import Pokédex from "./pages/Pokédex/Pokédex";
import { ContainerGlobal, GlobalStyle } from "./StylesGlobal";
import PokeProvider from "./Context/Provider";


function App() {
  return (
    <>
      <PokeProvider>

     
      <Router>
        <GlobalStyle />
        <ContainerGlobal>
          <Route path="/" exact component={Home} />
          <Route path="/Pokedex" component={Pokédex} />
        </ContainerGlobal>
      </Router>
      </PokeProvider>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?v=KMZKWCcTkm4