
import InfoTarjeta from '../views/InfoTarjeta';
import { URL_POPULAR_MOVIES, URL_BEST_MOVIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { determinarArray } from '../utils/helpers'
import Carousel from './Carrusel';
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {


  const peliculas = useFetch(`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const mejoresPeliculas = useFetch(`${URL_BEST_MOVIES}api_key=${APIKEY}`)
  const filtroPeliculas = determinarArray(peliculas)
  const filtroMejoresPeliculas = determinarArray(mejoresPeliculas)

// siempre declaren el estado arriba de todo, apenas inicia el componente
  const [latest, setLatest] = useState([]);

  // por que no usan su hook custom aca?
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ddc431acb0e32208ae440feadb8c3681`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results);
      });
  }, []);

// pongan los estilos *fuera* del componente, ya que si no cargan en cada render y pueden 
// hacer que su pagina funcione mas lento
  const useStyles = makeStyles((theme) => ({
    text: {
      color: "#ffffff",
      padding: "1%",
      fontSize: "25px",
    "@media (max-width: 414px)": {
        fontSize: "15px"
      }
    },
    content: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '5%',
      flexWrap: "wrap",

    },
    title: {
      color:"white",
      textAlign: 'center',
    }
  }));
  const classes = useStyles();

  return (
    <div className="Home">

      <Carousel movieInfo={latest} />

      <div className={classes.content}>
        <section>

{/* esto deberia ser un h2. recuerden, un solo h1 por pagina! */}
          <h1 className={classes.title}>Popular Movies</h1>
          {filtroPeliculas.map(pelicula =>
            <InfoTarjeta
              viewType='InfoTarjetaHome'
              key={pelicula.id}
              id={pelicula.id}
              image={pelicula.poster_path}
              title={pelicula.title}
              type='movie'

            />
          )}

        </section>

        <section>

          <h1 className={classes.title}>Best Movies</h1>
          {filtroMejoresPeliculas.map(mejorPelicula =>
            <InfoTarjeta
              viewType='InfoTarjetaHome'
              key={mejorPelicula.id}
              id={mejorPelicula.id}
              image={mejorPelicula.poster_path}
              title={mejorPelicula.title}
              type='movie'

            />
          )}
        </section>
      </div>


{/* 
si pusieran esto en App, no necesitarian repetirlo en los demas componentes. 
ademas, deberia tener la etiqueta Footer */}
      <Box bgcolor="#ff0000" width="100%" height="100px"  display="flex" 
      justifyContent="center" alignItems="center">
        <Typography className={classes.text} >
          Movie Finder by Euge and Sofi
        </Typography>
      </Box>

    </div>
  )
}


export default Home;
