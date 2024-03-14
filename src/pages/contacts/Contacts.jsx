import React from 'react';
import UserList from '../../components/userList/UserList';
import './contactStyles.css'
import Nav from '../../components/nav/Nav';
const Contacts = () => {
  return (
    <>
    <Nav/> 
    <h1>Contacts</h1>
    <hr />
    <UserList/>
    </>
  )
  }
export default Contacts;