import React from "react";
import { MdDelete } from "react-icons/md";
import './buttonDeleteStyles.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteUser1, deleteUserFromForm } from '../../store/AppSlices'; // Importa ambas acciones

const ButtonDelete = ({ userId, isApiUser }) => {
    const dispatch = useDispatch();

    const deleteClick = () => {
        console.log("delete ", userId);
        if (isApiUser) {
            dispatch(deleteUser1(userId)); // Si es un usuario de la API, llama a la acción deleteUser1
        } else {
            dispatch(deleteUserFromForm(userId)); // Si es un usuario del formulario, llama a la acción deleteUserFromForm
        }
    }

    return (
        <button data-testid="delete-button" className="btn-delete" onClick={deleteClick}><MdDelete /></button>
    );
}

export default ButtonDelete;
