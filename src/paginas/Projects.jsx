import { Link } from 'react-router-dom';
import projects from '../data/projects';


function Projects() {

    return (
      <>
        <h1>Mis Proyectos </h1>
        <ul>
          {projects.map(project =>(
              <li key={project.id}>
                  <h3>{project.name} </h3>
                  <img src={project.image} /> 
                  <p>{project.description} </p>
                  <a href={project.url}>Ver</a>
              </li>
          ))}
        </ul>
        <Link to={'/'}>Volver</Link>

      </>
    );
  }
  
  export default Projects;
  