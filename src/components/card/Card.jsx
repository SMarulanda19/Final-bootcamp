import React from 'react';
import './cardEstilos.css';
import ButtonAdd from '../../components/buttonAdd/ButtonAdd';
import ButtonDelete from '../../components/buttonDelete/ButtonDelete';

function Card({ user }) { 
  // Verificar si user existe y si tiene la propiedad avatar
  if (!user || !user.avatar ) {
    return null; // Si no hay user o avatar, no renderizar nada
  }

  return (
    <div className="card-main" key={user.id}>
      <img src={user.avatar} alt="picture" className="card-image-container" />
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p className="card-email">{user.email}</p>
      <div className="button-container">
        
        <ButtonAdd userId = {user.id} /> 
        <ButtonDelete userId={user.id} isApiUser={user.isApiUser} />
      </div>
    </div>
  );
}

export default Card;
