

import InfoTarjeta from '../views/InfoTarjeta';

import { URL_POPULAR_MOVIES, URL_BEST_MOVIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { determinarArray } from '../utils/helpers'
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Carousel from './Carrusel';
import {makeStyles} from '@material-ui/core/styles'
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
        color:"#ffffff",
        padding:"1%",
        textAlign:"center",
        fontSize:"25px",

        "@media (max-width: 300px)": {
          fontSize:"20px"
        }
    },
    content:{
      display:'flex',
      justifyContent:'space-evenly',
      marginTop:'5%',
      flexWrap:"wrap",
      "@media (max-width: 578px)": {
       
      }
    },
    title:{
     
      textAlign:'center',
    }
    }));
  const classes=useStyles();

  return (
    <div className="Home">
      
      <Carousel movieInfo={latest} />
      
        <div className={classes.content}>
          <section>
          
            <h1 className={classes.title}>Popular Movies</h1>
            {filtroPeliculas.map(pelicula =>
              <InfoTarjeta
                viewType='InfoTarjetaHome'
                key={pelicula.id}
                id ={pelicula.id}
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
            id ={mejorPelicula.id}
            image={mejorPelicula.poster_path}
            title={mejorPelicula.title}
            type='movie'

          />
        )}
      </section>
      </div>

      
      <Box bgcolor="#ff0000" maxWidth="100%" height="100px" textAlign="center">
        <Typography className={classes.text} >
            Movie Finder by Euge and Sofi
        </Typography>
      </Box>
      
    </div>
  )
}


export default Home;
