import { useState, useEffect } from 'react';
import CardMedia from '../views/CardMedia';

import { URL_POPULAR_MOVIES, URL_POPULAR_SERIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { cortarArray } from '../utils/helpers'
const Home = () => {


  const peliculas = useFetch (`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const series = useFetch (`${URL_POPULAR_SERIES}api_key=${APIKEY}`)



  const filtroPeliculas = cortarArray(peliculas)
  const filtroSeries = cortarArray(series)


  return (
    <div className="Home">
      <h2>Home</h2>
      <section className="sectionMovie">
        <h1>Popular Movies</h1>
        {filtroPeliculas.map(pelicula =>
          <CardMedia
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
      </section>
      <section className="sectionTv">
        <h1>Popular Series</h1>
        {filtroSeries.map(serie =>
          <CardMedia
            key={serie.id}
            image={serie.poster_path}
            title={serie.name}
          />
        )}
      </section>
    </div>
  )
}

export default Home;