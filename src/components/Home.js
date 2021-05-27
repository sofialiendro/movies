import { useState, useEffect } from 'react';
import InfoTarjeta from '../views/InfoTarjeta';

import { URL_POPULAR_MOVIES, URL_POPULAR_SERIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { determinarArray } from '../utils/helpers'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => {


  const peliculas = useFetch (`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const series = useFetch (`${URL_POPULAR_SERIES}api_key=${APIKEY}`)



  const filtroPeliculas = determinarArray(peliculas)
  const filtroSeries = determinarArray(series)


  return (
    <div className="Home">
      

      <h2>Home</h2>
      <section className="sectionMovie">
        <h1>Popular Movies</h1>
        {filtroPeliculas.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
      </section>
      <section className="sectionTv">
        <h1>Popular Series</h1>
        {filtroSeries.map(serie =>
          <InfoTarjeta
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