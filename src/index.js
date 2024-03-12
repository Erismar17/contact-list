import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import ContactsList from './Components/ContactList/Contacts';
import Favorites from './Components/Favorites/Favorites';
import NavBar from './Components/NavigationBar/NavBar';
import Overview from './Components/Overview/Overview';
import NotFound from './Components/Error/Error';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFound/>,
    children: [
      {
        path:"overview",
        element: <Overview />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "contacts",
        element: <ContactsList />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();