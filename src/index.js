import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
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
  /* si quiero navegar en otras rutas fuera de una ruta padre solo lo pongo fuera de la primera ruta */
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFound/>,
    children: [
      /* con esta ruta siempre se renderiza o inicializa la app con la ruta que le pongo en el to='' */
              /* ruta hija inicial */
      {
        index: true,
        element: <Navigate to='overview' replace/>,
      },
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