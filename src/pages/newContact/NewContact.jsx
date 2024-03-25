import React, { useState } from 'react';
import './FornStyles.css'
import axios from 'axios';

 const NewContact = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
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
      
      const res = await axios.post('https://reqres.in/api/users', formData);
      
      console.log(res.data)
      
      // anadir este nuevo usuario a lista state
      // como no se 

      alert('Contacto creado exitosamente');
      setFormData({
        FirstName: '',
        LastName: '',
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
          name="FirstName"
          onChange={handleChange}
          minLength="6"
          maxLength="18"
          placeholder='First name'
        />
      </div>

      {/* Lastname */}
      <div className='containerCampos'>
      <input
          type="text"
          className='campos'
          name="LastName"
          onChange={handleChange}
          minLength="6"
          maxLength="18"
          placeholder='Last name'
        />
      </div>

      {/* Email */}
      <div className='containerCampos'>

      <input
          type="email"
          className='campos'
          name="Email"
          onChange={handleChange}
          minLength="6"
          maxLength="18"
          placeholder='Email'
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