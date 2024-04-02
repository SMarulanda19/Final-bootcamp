import React from "react";
import { MdDelete } from "react-icons/md";
import './buttonDeleteStyles.css'
import { useDispatch, useSelector } from "react-redux";
import  {deleteUser1} from '../../store/AppSlices'


const ButtonDelete = ({userId}) => {
    const dispatch = useDispatch();

    const deleteClick  = (id) => {
        console.log("delete ", id)
        dispatch(deleteUser1(id))
    }
    return(
        <button data-testid="delete-button" className="btn-delete" onClick={() => deleteClick(userId)}><MdDelete /></button>

    )
}

export default ButtonDelete