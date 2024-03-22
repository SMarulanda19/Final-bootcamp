import React from 'react';
import './FavoriteStyles.css'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card/Card'
import { toggleFavoriteState } from "../../store/AppSlices";


const Favorite = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.userList);
  const UsuariosFavoritos = useSelector((state) => state.users.UsuariosFavoritos)
  console.log(usersList)
  console.log("Estos son los Favoritos: ",UsuariosFavoritos)
  
  const favoriteContacts = usersList.filter(user => UsuariosFavoritos.includes(user.id));


  const handleAddFavorite = (userId) => {
    dispatch(toggleFavoriteState(userId));
  };

  return (
    <>
    <h1 className='title'>My Favorites</h1> 
    <hr />
    {favoriteContacts.length > 0 ? (
        <div>
          {favoriteContacts.map((user) => (
            <Card
              key={user.id}
              user={user}
              handleAddFavorite={() => toggleFavoriteState (userId)} 
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Favorite;