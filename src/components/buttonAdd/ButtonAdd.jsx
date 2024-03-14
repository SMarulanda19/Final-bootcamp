import React from 'react';
import { MdFavorite } from "react-icons/md";
import './buttonAddStyles.css'

const ButtonAdd = ({addClick}) => {
    return(
        <button className="btn-add" onClick={addClick} ><MdFavorite /></button>
    )
}

export default ButtonAdd