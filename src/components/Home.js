import { useState, useEffect } from 'react';

import { URL_POPULAR_MOVIES, URL_POPULAR_SERIES, APIKEY} from '../utils/variables'
import useFetch from '../hooks/useFetch'
import { determinarArray } from '../utils/helpers'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Carrusel from './Carrusel'
import InfoTarjeta from '../views/InfoTarjeta'
const Home = () => {

  const peliculas = useFetch(`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)
  const series = useFetch(`${URL_POPULAR_SERIES}api_key=${APIKEY}`)

  const filtroPeliculas = determinarArray(peliculas)
  const filtroSeries = determinarArray(series)

  const [tipoDeVista, setTipoDeVista] = useState("principal")
  const [idProductoDetalle, setIdProductoDetalle] = useState('')
  const [tipoProducto, setTipoProducto] = useState('')
  const [producto, setProducto] = useState({});


  useEffect(() => {
  
    fetch(`https://api.themoviedb.org/3/${tipoProducto}/${idProductoDetalle}?api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducto(data)
      });

    
  }, [idProductoDetalle]);
  
  const handleClickDetalle = (id,type) => {
    setIdProductoDetalle(id)
    setTipoProducto(type)
    setTipoDeVista("detalle")
  }


  return (
    <div className="App">

      {tipoDeVista === "principal" &&
        <div className="Home">
          <Carrusel></Carrusel>


          <h2>Home</h2>
          <section className="sectionMovie">
            <h1>Popular Movies</h1>
            {filtroPeliculas.map(pelicula =>
              <InfoTarjeta
                handleClickDetalle = {handleClickDetalle}
                id={pelicula.id}
                key={pelicula.id}
                image={pelicula.poster_path}
                title={pelicula.title}
                type="movie"

              />
            )}
          </section>
          <section className="sectionTv">
            <h1>Popular Series</h1>
            {filtroSeries.map(serie =>
              <InfoTarjeta
                handleClickDetalle = {handleClickDetalle}
                id={serie.id}
                key={serie.id}
                image={serie.poster_path}
                title={serie.name}
                type="tv"
              />
            )}
          </section>
        </div>
      }

      {tipoDeVista === "detalle" && 
        <div>
          {tipoProducto === 'movie' ? 
          <div>
            <h3>{producto.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${producto.poster_path}`}/>
            {/* <img src={`https://image.tmdb.org/t/p/w500${producto.backdrop_path}`}/> */}
            <h3>{producto.release_date}</h3>
            
            <p>{producto.overview}</p>
      
   
          </div> 
          : 
          <div >
            <h3>{producto.original_name}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${producto.poster_path}`}/>
            {/* <img src={`https://image.tmdb.org/t/p/w500${producto.backdrop_path}`}/> */}
            <h3>{producto.first_air_date}</h3>
            <p>{producto.overview}</p>
            
          </div>
        }
        </div>
      
      }

    </div>

  );
}

export default Home;