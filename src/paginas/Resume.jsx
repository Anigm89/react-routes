import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {studies, experiences} from '../data/resume'

function Resume() {
   
  
    return (
      <>
        <h1>Sobre mí</h1>
        <h4>Estudios</h4>
        <ul>
        {studies.map(study =>(
            <li key={study.id}>
                <p className='title'>{study.title} </p>
                <p>{study.institution} </p>
                <p>{study.date} </p>
            </li>
        ))}
        </ul>
        <h4>Experiencia</h4>
        <ul>
        {experiences.map(experience =>(
            <li key={experience.id}>
                <p className='title'>{experience.title} </p>
                <p>{experience.company} </p>
                <p>{experience.date} </p>
            </li>
        ))}
        </ul>
        <Link to={'/'}>Volver</Link>
      </>
    );
  }
  
  export default Resume;
  