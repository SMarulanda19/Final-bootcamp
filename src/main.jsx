import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Favorite from './pages/favorites/Favorite.jsx';
import App from "./App.jsx";
import NewContact from "./pages/newContact/NewContact.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
  },

  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
  {
    path: "/newContact",
    element: <NewContact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);