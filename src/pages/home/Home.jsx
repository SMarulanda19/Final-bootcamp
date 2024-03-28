import React from 'react';
import UserList from '../../components/userList/UserList'
import Favorite from '../favorites/Favorite';
import './homeStyles.css'
function Home() {
  return (
    <>
        <h1 >
          Home
        </h1>
        <hr  className='line'/>
        <br />
    <UserList></UserList>
    <br  />
    <Favorite></Favorite>

    </>
  );
}

export default Home;
