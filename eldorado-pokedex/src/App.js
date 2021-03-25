import {
 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Pokédex from "./pages/Pokédex/Pokédex";
import { GlobalStyle } from "./StylesGlobal";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Pokedex" component={Pokédex} />
        </div>
      </Router>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?v=KMZKWCcTkm4