import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Pokédex from "./pages/Pokédex/Pokédex";
import Legendaries from './pages/Legendaries/Legendaries';
import Documentation from './pages/Documentation/Documentation';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/Pokedex"  component={Pokédex} />
        <Route path="/Legendaries"  component={Legendaries} />
        <Route path="/Documentation"  component={Documentation} />
       <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
