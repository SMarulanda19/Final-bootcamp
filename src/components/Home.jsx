import React from 'react';
import Nav from './Nav';
import {Outlet} from 'react-router-dom';
import Card from './Card.jsx';
function Home() {
  return (
    <>
    <Nav/>
    <div>
     <Outlet/>
    </div>
    <br />
    <br />
    <br />
    <div className='favorite-card-container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
  );
}

export default Home;
