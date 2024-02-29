import React from 'react';

// Componente de elemento de contacto
const ContactItem = ({ contact }) => {
  return (
    <div>
      <p>{contact.fullName}</p>
      <p>{contact.email}</p>
    </div>
  );
};

// Componente de lista de contactos
const ContactsList = () => {
  const contacts = [
    { fullName: 'Nombre completo 1', email: 'correo1@correo.com' },
    { fullName: 'Nombre completo 2', email: 'correo2@correo.com' },
    // Agrega más contactos aquí
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactsList;