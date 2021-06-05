import InfoTarjeta from './InfoTarjeta'
import useFetch from '../hooks/useFetch'
import { URL_POPULAR_MOVIES, URL_BEST_MOVIES, URL_NEW_MOVIES, URL_CINEMA_MOVIES, APIKEY } from '../utils/variables'
import { determinarArray  } from '../utils/helpers'
import Grid from '@material-ui/core/Grid';

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
              id ={pelicula.id}
              image={pelicula.poster_path}
              title={pelicula.title}
              type="movie"

            />
        )}
          </div>
          <div className="BestMovies">
            <h2>Best Movies</h2>
            {filtroBestMovies.map(mejorPelicula =>
          <InfoTarjeta
            key={mejorPelicula.id}
            id ={mejorPelicula.id}
            image={mejorPelicula.poster_path}
            title={mejorPelicula.title}
            type="movie"

          />
         

        )}
          </div>
          <div className="NewMovies">
            <h2>New Movies</h2>
            {filtroNewMovies.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            id ={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}
            type="movie"

          />
        )}
          </div>
          <div className="CinemaMovies">
            <h2>Movies at the Cinema</h2>
            {filtroCinemaMovies.map(pelicula =>
          <InfoTarjeta
            key={pelicula.id}
            id ={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}
            type="movie"

          />
        )}
          </div>

        </section>
    )
}

export default Peliculas;
