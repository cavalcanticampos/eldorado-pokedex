import {
 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import React from "react";

import Home from "./pages/home/Home";
import Pokedex from "./pages/pokedex/Pokedex";
import { ContainerGlobal, GlobalStyle } from "./stylesGlobal";
import PokeProvider from "./components/context/Provider"


function App() {
  return (
    <>
      <PokeProvider>

     
      <Router>
        <GlobalStyle />
        <ContainerGlobal>
          <Route path="/" exact component={Home} />
          <Route path="/Pokedex" component={Pokedex} />
        </ContainerGlobal>
      </Router>
      </PokeProvider>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?v=KMZKWCcTkm4