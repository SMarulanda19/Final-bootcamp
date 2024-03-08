import React from 'react';
import Nav from '../../components/Nav';
import {Outlet} from 'react-router-dom';

function Home() {
  return (
    <>
    <Nav/>
    <div>
     <Outlet/>
    </div>
    </>
  );
}

export default Home;
