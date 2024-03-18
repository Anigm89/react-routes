import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {
   
  
    return (
      <>
        <h1>Bienvenido a mi página </h1>
        <Link to={'/proyects'}>Mis proyectos</Link>    
        <Link to={'/resume'}>Mi Currículo</Link>
      </>
    );
  }
  
  export default Home;
  