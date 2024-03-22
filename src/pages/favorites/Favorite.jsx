import React from 'react';
import './FavoriteStyles.css'
import { useSelector } from 'react-redux';
import Card from '../../components/card/Card'


const Favorite = () => {

  const usersList = useSelector((state) => state.users.userList.filter((user) => user.favorite));
  console.log(usersList)

  return (
    <>
    <h1 className='title'>My Favorites</h1> 
    <hr />
    <Card>

    </Card>

    </>
  );
};

export default Favorite;