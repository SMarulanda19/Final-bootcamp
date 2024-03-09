import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx';
import ContactsList from './components/Contacts.jsx';
import Favorite from './components/Favorite.jsx';
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