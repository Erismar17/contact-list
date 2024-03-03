import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Favorites from './Favorites/Favorites';
import NavBar from './NavigationBar/NavBar';
import ContactsList from './ContactList/Contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Favorites />
    <ContactsList />
  </React.StrictMode>
);

reportWebVitals();