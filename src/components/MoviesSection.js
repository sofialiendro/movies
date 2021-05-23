import React from 'react'
import {Link} from 'react-router-dom'

const SeccionPeliculas = ({peliculas, titulo}) => {
    
  return (
    <section>
    <h2>{titulo}</h2>
    <div>
      {peliculas.map(pelicula => (
          <Link to={`/detalle/${pelicula.id}`}>
          <article>
         {pelicula.title}
          <p>{pelicula.id}</p>
      
          </article>
          </Link> 
        ))
      }
    </div>
  </section>
  )
}

export default SeccionPeliculas