import React from 'react';
import { MdFavorite } from "react-icons/md";
import './buttonAddStyles.css'
import { useDispatch } from 'react-redux';
import {toggleFavoriteState} from '../../store/AppSlices'

const ButtonAdd = ({userId}) => {
const dispatch = useDispatch();


    const addClick  = (id) => {
        dispatch(toggleFavoriteState(id))
    }
    return(
        <button className="btn-add" onClick={() => addClick (userId)} ><MdFavorite /></button>
    )
}

export default ButtonAdd 