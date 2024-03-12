import React from 'react';
import Nav from './components/nav/Nav';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <>
    <div>
    <Nav/>
     <Outlet/>
    </div>
    <br />
    <br />
    <br />
    </>
  );
}

export default App;