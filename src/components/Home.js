

import InfoTarjeta from '../views/InfoTarjeta';

import { URL_POPULAR_MOVIES, URL_BEST_MOVIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { determinarArray } from '../utils/helpers'
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Carousel from './Carrusel';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {


  const peliculas = useFetch (`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const mejoresPeliculas = useFetch (`${URL_BEST_MOVIES}api_key=${APIKEY}`)



  const filtroPeliculas = determinarArray(peliculas)
  const filtroMejoresPeliculas = determinarArray(mejoresPeliculas)


  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ddc431acb0e32208ae440feadb8c3681`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results);
      });
  }, []);
  const useStyles=makeStyles((theme)=>({
    text:{
        color:"#ffffff"
    }
    }));
  const classes=useStyles();

  return (
    <div className="Home">
      
      <Carousel movieInfo={latest} />
      
        
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
      
        <h1>Best Movies</h1>
        {filtroMejoresPeliculas.map(mejorPelicula =>
          <InfoTarjeta
            key={mejorPelicula.id}
            id ={mejorPelicula.id}
            image={mejorPelicula.poster_path}
            title={mejorPelicula.title}
            type='movie'

          />
        )}
      </section>
      
      <Box bgcolor="#3f51b5" maxWidth="100%" height="100px" justify="center">
        <Typography align="center" className={classes.text} variant="h5">
            Movie Finder by Euge and Sofi
        </Typography>
      </Box>
      
    </div>
  )
}


export default Home;
