import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
   
  
    return (
      <>
        <h1>Mis Proyectos </h1>
        {projects.map(project =>(
            <div key={project.id}>
                <p>{project.name} </p>
                <img src={project.image} /> 
                <p>{project.description} </p>
                <Link to={project.url}>ver</Link>


            </div>
        ))}
        <Link to={'/'}>Volver</Link>

      </>
    );
  }
  
  export default Projects;
  