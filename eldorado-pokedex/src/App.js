import {
 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import React from "react";

import Home from "./pages/home/Home";
import Pokédex from "./pages/Pokédex/Pokédex";
import { ContainerGlobal, GlobalStyle } from "./StylesGlobal";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ContainerGlobal>
          <Route path="/" exact component={Home} />
          <Route path="/Pokedex" component={Pokédex} />
        </ContainerGlobal>
      </Router>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?v=KMZKWCcTkm4