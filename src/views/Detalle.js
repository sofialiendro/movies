import { useParams} from 'react-router-dom'
import { useState, useEffect } from "react"
import { APIKEY } from '../utils/variables'

const Detalle= () => {
    
    const params = useParams()
    const [producto, setProducto] = useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${APIKEY}`)
            .then(res => res.json())
            .then(data => setProducto(data))
          
    }, [])
    console.log(producto)

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${producto.poster_path}`}/>
            {params.type === 'movie' ? <h2>{producto.title}</h2> : <h2>{producto.name}</h2> }
            <p>{producto.overview}</p>
            {params.type === 'movie' ? <h4>{producto.release_date}</h4> : <h4>{producto.first_air_date}</h4> }
            
         
        
         
            
           
        </div>
    );
}

export default Detalle;