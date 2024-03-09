import React from 'react';
import './cardEstilos.css';
import { MdDelete } from "react-icons/md";
import { MdFavorite } from "react-icons/md";


function Card() {
  return (
    <div className="card-main">
      <div className="card-image-container">
        <img src="src\assets\Perfil.png" alt="picture" className="card-image" />
      </div>
      <h2 className="card-name">Full Name</h2>
      <p className="card-email">email@email.com</p>
      <div className="button-container">
        <button className="btn-add"><MdFavorite /></button>
        <button className="btn-delete"><MdDelete /></button>
      </div>
    </div>
  );
}

export default Card;
