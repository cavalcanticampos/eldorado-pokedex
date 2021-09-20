import React, { useEffect, useState } from "react";
import api from "../../service/Api";
import { useHistory } from "react-router-dom";
import { usePoke } from "../../components/context/Provider";
import { colors } from "../../Colorstyles";
import { IoIosArrowDown } from "react-icons/io";
import './CreatingPokemon.css'


function CreatingPokemon() {
  const { pokemonData } = usePoke();
  const [name, setName] = useState("");
  const [type, setType] = useState("water");
  const [sprite, setSprite] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [backgroundColor, setBackgroundColor] = useState();

  const history = useHistory();

  useEffect(() => {
    if (type === "water") {
      setBackgroundColor(colors.water);
    } else if (type === "fire") {
      setBackgroundColor(colors.fire);
    } else if (type === "normal") {
      setBackgroundColor(colors.normal);
    } else if (type === "fighting") {
      setBackgroundColor(colors.fighting);
    } else if (type === "flying") {
      setBackgroundColor(colors.flying);
    } else if (type === "poison") {
      setBackgroundColor(colors.poison);
    } else if (type === "ground") {
      setBackgroundColor(colors.ground);
    } else if (type === "rock") {
      setBackgroundColor(colors.rock);
    } else if (type === "bug") {
      setBackgroundColor(colors.bug);
    } else if (type === "ghost") {
      setBackgroundColor(colors.ghost);
    } else if (type === "steel") {
      setBackgroundColor(colors.steel);
    } else if (type === "grass") {
      setBackgroundColor(colors.grass);
    } else if (type === "electric") {
      setBackgroundColor(colors.electric);
    } else if (type === "psychic") {
      setBackgroundColor(colors.psychic);
    } else if (type === "ice") {
      setBackgroundColor(colors.ice);
    } else if (type === "dragon") {
      setBackgroundColor(colors.dragon);
    } else if (type === "dark") {
      setBackgroundColor(colors.dark);
    } else if (type === "fairy") {
      setBackgroundColor(colors.fairy);
    } else if (type === "unknown") {
      setBackgroundColor(colors.shadowmob);
    } else if (type === "shadow") {
      setBackgroundColor(colors.shadowgold);
    }
  }, [type]);

  console.log(backgroundColor);

  async function handleCreate(ev) {
    ev.preventDefault();

    const data = { name, type, sprite, attack, defense, backgroundColor };

    try {
      const response = await api.post("/createPokemon", data);
      alert("criaçao  realizado com sucesso");
      setType(type);
      history.push("/Pokedex");
    } catch (err) {
      alert("Erro na criaçao, tente novamente");
    }
  }

  console.log(type);

  return (
    <div className="container">
     

      <div className="content-form">
        <form onSubmit={handleCreate}>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="sprite">Imagem</label>
            <input
              id="sprite"
              name="sprite"
              type="text"
              value={sprite.sprite}
              onChange={(e) => setSprite(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="attack">Ataque</label>
            <input
              id="attack"
              name="attack"
              type="text"
              value={attack.attack}
              onChange={(e) => setAttack(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="defense">Defesa</label>
            <input
              id="defense"
              name="defense"
              type="text"
              value={defense.defense}
              onChange={(e) => setDefense(e.target.value)}
            />
          </div>
           <div className="content-type">

           <select onChange={(e) => setType(e.target.value)} value={type.type}className="selected-type" >
            <option value="water">water</option>
            <option value="fire">fire</option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flyig">flying</option>
            <option  value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknow">unknown</option>
            <option value="shadow">shadow</option>
          </select>
        
        
           </div>

          <div className="btn-content">
            <button type="submit" className="input-btn">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatingPokemon;
