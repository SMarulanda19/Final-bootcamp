import React, { useState } from 'react';
import './FornStyles.css'


 const NewContact = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    resolved: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://reqres.in/api/users', formData);
      alert('Contacto creado exitosamente');
    
      setFormData({
        FirstName: '',
        LastName: '',
        description: '',
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
        
        <input
            type="text"
            className='campos'
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="6"
            maxLength="18"
            placeholder='First name'
          />
      </div>
      <div className='containerCampos'>
        
        <input
            type="text"
            className='campos'
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="6"
            maxLength="18"
            placeholder='Last name'
          />
      </div>
      <div className='containerCampos'>
        
        <input
            type="email"
            className='campos'
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
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