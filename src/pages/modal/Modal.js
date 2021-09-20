import React, { useState } from "react";
import "./Modal.css";
import {IoCreateOutline ,IoCloseSharp} from "react-icons/io5"
import CreatingPokemon from "../creatingPokemon/CreatingPokemon";


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
      <IoCreateOutline/>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          
           

               <CreatingPokemon/>

            
            <button className="close-modal" onClick={toggleModal}>
              <IoCloseSharp/>
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}