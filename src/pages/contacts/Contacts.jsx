import React from 'react';
import UserList from '../../components/userList/UserList';
import './contactStyles.css'
import Pagination from '../../components/pagination/Pagination';
const Contacts = () => {
  return (
    <>
    <h1>Contacts</h1>
    <hr />
    <UserList/>
    <Pagination/>
    </>
  )
  }
export default Contacts;