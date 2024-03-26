import React, { useState } from 'react';
import './FornStyles.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { addUser } from '../../store/AppSlices';
import { useDispatch } from 'react-redux'; 

 const NewContact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({

    id: Math.floor(Math.random() * 1000),
    avatar:`https://reqres.in/img/faces/${Math.floor(Math.random() * 12) + 1}-image.jpg`,
    first_name: '',
    last_name: '',
    email: '',
    resolved: false
  });


  const handleChange = e => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      
      // const res = await axios.post('https://reqres.in/api/users', formData);
      // console.log(res.data)
      dispatch(addUser(formData));

      // anadir este nuevo usuario a lista state
      // obtener lista de usuarios
      alert('Contacto creado exitosamente');

      setFormData({
        id:null,
        first_name: '',
        last_name: '',
        email: '',
        resolved: false
      });

    } catch (error) {
      console.error('Error al crear contacto:', error);
    }
  };

  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
    
    <div className='containerCampos'>

      {/* Firtname */}
      <input
          type="text"
          className='campos'
          name="first_name"
          onChange={handleChange}
          minLength="6"
          maxLength="18"
          placeholder='First name'
        />
      </div>

      {/* last_name */}
      <div className='containerCampos'>
      <input
          type="text"
          className='campos'
          name="last_name"
          onChange={handleChange}
          minLength="6"
          maxLength="18"
          placeholder='Last name'
        />
      </div>

      {/* email */}
      <div className='containerCampos'>

      <input
          type="email"
          className='campos'
          name="email"
          onChange={handleChange}
          minLength="6"
          placeholder='email'
        />
      </div>

      <div className='containerCampos'>
        <input
            type="checkbox"
            name="resolved"
            checked={formData.resolved}
            onChange={handleChange}
            className='checkbox'
          />
        <label className=''>
          Enable like Favorite
        </label>
      </div>
      <div className="containerCampos">
        <button className='ButtonSubmit' type="submit">Save</button>
      </div>
      
    </form>
    </>
  );
};

export default NewContact;