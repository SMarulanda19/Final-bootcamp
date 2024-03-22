import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { getUsers1, toggleFavoriteState } from "../../store/AppSlices";
import "./userListStyles.css";


export default function UserInfoList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.userList); // Obtener la lista de usuarios del estado de Redux
  const Pages = useSelector( (state) => state.form.Pages);
  console.log(Pages)



  useEffect(() => {
    dispatch(getUsers1(Pages));
    console.log(Pages)
  }, [Pages]);

  useEffect(() => {
    dispatch(getUsers1(Pages));
    console.log(Pages)
  }, []);

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
