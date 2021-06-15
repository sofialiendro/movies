import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { APIKEY } from '../utils/variables'
import { makeStyles } from '@material-ui/core/styles'

const Detalle = () => {

    const params = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${APIKEY}`)
            .then(res => res.json())
            .then(data => setProducto(data))

    }, [])


    const imagenFondo = `https://image.tmdb.org/t/p/w500${producto.backdrop_path}`
    const useStyles = makeStyles((theme) => ({
        title: {
            marginTop: '0px',
        },
        fondo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: `url(${imagenFondo})`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            position: 'relative',
            '&:before': {
            content:'',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
              },
        
        },
        principal:{
            display: 'flex',
            justifyContent:"space-evenly",
            alignItems: 'center',
            width:'700px',
            height:"auto",
            marginTop:"10px",
            "@media (max-width: 520px)": {
                width:'300px',
                flexWrap:"wrap",
                justifyContent: "center",
                alignItems:"center",
                fontSize:"10px",
               
              }

            
      
        },
        imagenDetalle:{
            width:'50%',
            height:'auto',
            "@media (max-width: 520px)": {
                marginBottom:"10px",
                width:"70%"
                
            }
            
          
    
        },

        img:{
            width:'100%',
            height:'auto',
           
            
         
        },

        textoDetalle:{
            color:'white',
            marginLeft:"50px",
            "@media (max-width: 520px)": {
               width:"100%",
               height:"auto",
               marginLeft:"10px",
               textAlign:"center"
            
              }
            
        },
        description:{
           
            width:"300px",
            "@media (max-width: 280px)": {
                width:"100%",
            }


           
        }
    
    }));
    const classes = useStyles();

    return (
        <div className={classes.fondo}>

            <div className={classes.principal}>
                <div className={classes.imagenDetalle}>
                    <img className={classes.img} src={`https://image.tmdb.org/t/p/w500${producto.poster_path}`} />
                </div>
                <div className={classes.textoDetalle}>
                    {params.type === 'movie' ? <h2 className={classes.title}>{producto.title}</h2> : <h2 className={classes.title}>{producto.name}</h2>}
                    {params.type === 'movie' ? <h4>{producto.release_date}</h4> : <h4>{producto.first_air_date}</h4>}
                    <h4>General</h4>
                    <p className={classes.description}>{producto.overview}</p>
                    

                </div>


            </div>



        </div>
    );
}

export default Detalle;