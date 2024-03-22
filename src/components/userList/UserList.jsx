import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { getUsers, toggleFavoriteState } from "../../store/AppSlices";
import "./userListStyles.css";

export default function UserInfoList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.form.UsuariosBase); // Obtener la lista de usuarios del estado de Redux

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAddFavorite = (userId) => {
    dispatch(toggleFavoriteState(userId));
  };

  return (
    <>
      {usersList.length > 0 ? (
        <div className="user-info-list-container">
          {usersList.map((user) => (
            <Card
              key={user.id}
              user={user}
              handleAddFavorite={handleAddFavorite} 
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
