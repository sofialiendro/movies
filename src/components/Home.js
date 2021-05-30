

import InfoTarjeta from '../views/InfoTarjeta';

import { URL_POPULAR_MOVIES, URL_POPULAR_SERIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { determinarArray } from '../utils/helpers'


import Carrusel from './Carrusel';

const Home = () => {


  const peliculas = useFetch (`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const series = useFetch (`${URL_POPULAR_SERIES}api_key=${APIKEY}`)



  const filtroPeliculas = determinarArray(peliculas)
  const filtroSeries = determinarArray(series)


  return (
    <div className="Home">
      <Carrusel></Carrusel>

      <h2>Home</h2>
      <section className="sectionMovie">
        <h1>Popular Movies</h1>
        {filtroPeliculas.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            id ={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}
            type='movie'

          />
        )}
      </section>
      <section className="sectionTv">
        <h1>Popular Series</h1>
        {filtroSeries.map(serie =>
          <InfoTarjeta
            key={serie.id}
            id ={serie.id}
            image={serie.poster_path}
            title={serie.name}
            type='tv'

          />
        )}
      </section>
    </div>
  )
}

export default Home;
