import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { getUsers1, toggleFavoriteState } from "../../store/AppSlices";
import "./userListStyles.css";

export default function UserInfoList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.userList); // Obtener la lista de usuarios del estado de Redux
  const usersForm = useSelector((state) => state.users.usersForm); // Obtener la lista de usuarios del estado de Redux
  
  const Pages = useSelector( (state) => state.users.Pages);
  console.log(usersForm)
  
  useEffect(() => {
    dispatch(getUsers1(Pages));
    console.log(Pages)
  }, [dispatch, Pages]); // Este efecto se ejecutará cada vez que Pages cambie o dispatch cambie

  const handleAddFavorite = (userId) => {
    dispatch(toggleFavoriteState(userId));
  };

  return (
    <>
      {(usersList.length > 0 || usersForm.length > 0) ? (
        <div className="user-info-list-container">
          {/* Mapea la lista combinada de usuarios y renderiza cada usuario en un componente Card */}
          {[...usersList, ...usersForm].map((user) => (
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
