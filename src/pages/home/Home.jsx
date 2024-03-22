import React from 'react';
import UserList from '../../components/userList/UserList'
import Favorite from '../favorites/Favorite';
function Home() {
  return (
    <>
        <h1>
          Home
        </h1>
        <hr />
    <UserList></UserList>
    <hr />
    <Favorite></Favorite>

    </>
  );
}

export default Home;
