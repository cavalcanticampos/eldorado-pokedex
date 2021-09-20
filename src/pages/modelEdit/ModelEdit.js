import React, { useState } from "react";
import "./ModelEdit.css";
import { IoCreateOutline, IoCloseSharp } from "react-icons/io5";
import CreatingPokemon from "../creatingPokemon/CreatingPokemon";
import EditPokemon from "../editPokemon/EditPokemon";
import { MdSystemUpdateAlt } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { usePoke } from "../../components/context/Provider";

export default function ModelEdit() {
  const [modal, setModal] = useState(false);
  const { pokemonData, active } = usePoke();
  const { id } = useParams();

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
          open
       
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <EditPokemon />

            <button className="close-modal" onClick={toggleModal}>
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
