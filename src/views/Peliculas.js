import InfoTarjeta from './InfoTarjeta'
import useFetch from '../hooks/useFetch'
import { URL_POPULAR_MOVIES, URL_BEST_MOVIES, URL_NEW_MOVIES, URL_CINEMA_MOVIES, APIKEY } from '../utils/variables'
import { determinarArray  } from '../utils/helpers'
    

const Peliculas = () => {

  const popularMovies = useFetch (`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const bestMovies = useFetch (`${URL_BEST_MOVIES}api_key=${APIKEY}`)
  const newMovies = useFetch (`${URL_NEW_MOVIES}api_key=${APIKEY}`)
  const cinemaMovies = useFetch (`${URL_CINEMA_MOVIES}api_key=${APIKEY}`)

  const filtroPopularMovies = determinarArray (popularMovies)
  const filtroBestMovies = determinarArray (bestMovies)
  const filtroNewMovies = determinarArray (newMovies)
  const filtroCinemaMovies = determinarArray (cinemaMovies)

    
    return (
        <section className="Peliculas">
          <div className="PeliculasPopulares">
            <h2>Popular Movies</h2>
            {filtroPopularMovies.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
          <div className="BestMovies">
            <h2>Best Movies</h2>
            {filtroBestMovies.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
          <div className="NewMovies">
            <h2>New Movies</h2>
            {filtroNewMovies.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
          <div className="CinemaMovies">
            <h2>Movies at the Cinema</h2>
            {filtroCinemaMovies.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>

        </section>
    )
}

export default Peliculas;
