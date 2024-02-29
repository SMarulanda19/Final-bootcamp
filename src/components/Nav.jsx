import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [newSection, setNewSection] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/contactos">Contactos</Link>
      <Link to="/favoritos">Favoritos</Link>
      <button onClick={() => setNewSection(!newSection)}>
        {newSection ? 'Nueva vista general' : '+ Nueva'}
      </button>
      {newSection && (
        <>
          <Link to="/nueva-vista-general" className="hidden">
            Nueva vista general
          </Link>
          <Link to="/nuevo" className="hidden">
            + Nueva
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;