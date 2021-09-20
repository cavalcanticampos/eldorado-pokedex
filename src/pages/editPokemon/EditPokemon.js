import React, { useEffect, useState } from "react";
import api from "../../service/Api";
import { useHistory, useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./EditPokemon.css";
import { IoCloseSharp } from "react-icons/io5";

function EditPokemon() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sprite, setSprite] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const history = useHistory();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    api.get(`/pokemon/${id}`).then((response) => {
      console.log(response);
      setName(response.data);
      setType(response.data);
      setSprite(response.data);
      setAttack(response.data);
      setDefense(response.data);
      setBackgroundColor(response.data);
    });
  }, []);

  async function handleCreate(ev) {
    ev.preventDefault();
    const data = { name, type, sprite, attack, defense, backgroundColor };

    try {
      const response = await api.put(`/pokemon/${id}`, data);
      alert("Atualizaçao  realizado com sucesso");
      history.push("/Pokedex");
    } catch (err) {
      alert("Erro na atualizaço, tente novamente");
      console.log(err);
    }
  }

  return (
    <div className="">
  
      <>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
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
                    <select
                      onChange={(e) => setType(e.target.value)}
                      value={type.type}
                      className="selected-type"
                    >
                      <option value="water">water</option>
                      <option value="fire">fire</option>
                      <option value="normal">normal</option>
                      <option value="fighting">fighting</option>
                      <option value="flyig">flying</option>
                      <option value="poison">poison</option>
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
                    <div>
                      <IoIosArrowDown />
                    </div>
                  </div>

                  <div className="btn-content">
                    <button type="submit" className="input-btn">
                      Alterar
                    </button>
                  </div>
                </form>
              </div>

              <button className="close-modal" onClick={toggleModal}>
                <IoCloseSharp />
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default EditPokemon;
