import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home.jsx';
// import Contact from './pages/contacts/Contacts.jsx';
import ContactsList from './pages/contacts/Contacts.jsx';
import Favorite from './pages/favorites/Favorite.jsx';
// import New from './pages/new/New.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [ {
      path: "/contacts",
      element: <ContactsList />,
    },
    {
      path: "/favorites",
      element: <Favorite />,
    },]
  }
 
  // {
  //   path: "/new",
  //   element: <New />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);