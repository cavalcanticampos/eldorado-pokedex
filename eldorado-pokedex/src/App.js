import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Pokédex from "./pages/Pokédex/Pokédex";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Pokedex" component={Pokédex} />
        </div>
      </Router>
    </>
  );
}

export default App;
