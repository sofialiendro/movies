import { useParams} from 'react-router-dom'
import { useState, useEffect } from "react"
import { APIKEY } from '../utils/variables'
import {makeStyles} from '@material-ui/core/styles'

const Detalle= () => {
    
    const params = useParams()
    const [producto, setProducto] = useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${APIKEY}`)
            .then(res => res.json())
            .then(data => setProducto(data))
          
    }, [])
    
    console.log(producto)

    const imagenFondo =`https://image.tmdb.org/t/p/w500${producto.backdrop_path}`
    const useStyles=makeStyles((theme)=>({
        principal:{
            backgroundImage: `url(${imagenFondo})`,
            height:'100vh',
        },
    
        }));
      const classes=useStyles();

    return (
        <div className={classes.principal}>
            <img src={`https://image.tmdb.org/t/p/w500${producto.poster_path}`}/>
            {params.type === 'movie' ? <h2>{producto.title}</h2> : <h2>{producto.name}</h2> }
            <p>{producto.overview}</p>
            {params.type === 'movie' ? <h4>{producto.release_date}</h4> : <h4>{producto.first_air_date}</h4> }
            
         
        
         
            
           
        </div>
    );
}

export default Detalle;