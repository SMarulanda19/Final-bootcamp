import React from 'react';
import './FavoriteStyles1.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card/Card';
import { toggleFavoriteState } from "../../store/AppSlices";
import { BsEmojiDizzy } from "react-icons/bs";

const Favorite = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.userList);
  const UsuariosFavoritos = useSelector((state) => state.users.UsuariosFavoritos);
  const usersForm = useSelector((state) => state.users.usersForm);
  
  const favoriteContacts = usersList.filter(user => UsuariosFavoritos.includes(user.id));
  const favoriteForm = usersForm.filter(user => UsuariosFavoritos.includes(user.id));

  const handleAddFavorite = (userId) => {
    dispatch(toggleFavoriteState(userId));
  };

  return (
    <>
      <h1 className='title'>My Favorites</h1> 
      <hr className='line' />
      <br />
      <div className="favorite-containers">
        <div className='container-favorites'>
          {favoriteContacts.map((user) => (
            <Card
              key={user.id}
              user={user}
              handleAddFavorite={() => toggleFavoriteState (userId)}
            />
          ))}
        </div>
        <div className='container-favorites-form'>
          {favoriteForm.map((user) => (
            <Card
              key={user.id}
              user={user}
              handleAddFavorite={() => toggleFavoriteState (userId)}
            />
          ))}
        </div>
      </div>
      {favoriteContacts.length === 0 && favoriteForm.length === 0 && (
        <p className="No-favorites"><BsEmojiDizzy /> No Favorites yet</p>
      )}
    </>
  );
};

export default Favorite;
