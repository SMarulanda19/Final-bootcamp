import React from 'react';
import './FavoriteStyles.css'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card/Card'
import { toggleFavoriteState } from "../../store/AppSlices";


const Favorite = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.userList.filter((user) => user.favorite));
  console.log(usersList)

  
  const handleAddFavorite = (userId) => {
    dispatch(toggleFavoriteState(userId));
  };

  return (
    <>
    <h1 className='title'>My Favorites</h1> 
    <hr />
    {usersList.length > 0 ? (
        <div>
          {usersList.map((user) => (
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