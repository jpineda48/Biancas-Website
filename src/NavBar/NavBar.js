import React from 'react';
import {  Link } from "react-router-dom";
import './NavBar.css'

const navbar= () =>{
  return (
  <div className='nav-bar'>
    <div className='links'>
    <li>
      <Link to="/">Dogs</Link>
    </li>
    <li>
      <Link to="/cats">Cats</Link>
    </li>
    <li>
      <Link to="/sheeps">Sheeps</Link>
    </li>
    <li>
      <Link to="/goats">Goats</Link>
    </li>
    </div>
  </div>
  );
}
export default navbar;
