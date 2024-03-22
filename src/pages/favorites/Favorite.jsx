import React from 'react';
import './FavoriteStyles.css'
import UserList from '../../components/userList/UserList';
const Favorite = () => {
  return (
    <>
    <h1 className='title'>My Favorites</h1>
    <UserList></UserList>
    <hr />
    </>
  );
};

export default Favorite;