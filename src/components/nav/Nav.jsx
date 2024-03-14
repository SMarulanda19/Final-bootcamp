import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Image from "../../Image/Globant.png"

const Navbar = () => {
  
  return (
    <>
    <div className="navbar">
      <div className='ContainerImage'>
        <img className='Imagenav' src={Image} alt="Logo" />
      </div>
      <div>
      <Link to="/" className='a'>Home</Link>
      <Link to="/contacts" className='a'>Contacts</Link>
      <Link to="/favorites" className='a'>Favorites</Link>
      <button className='ButtonNew' onClick={() => navigate("/newContact")}>
      + Nueva   
      </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;