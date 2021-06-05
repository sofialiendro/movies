import InfoTarjeta from '../views/InfoTarjeta';

import { URL_NEW_MOVIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import {makeStyles} from '@material-ui/core/styles'


const determinarArrayNuevas = (array) => {
    return array.slice(0, 20)
 }
 

const Latest = () => {


  
  const peliculaNueva = useFetch (`${URL_NEW_MOVIES}api_key=${APIKEY}`)



  
  const filtroPeliculasNuevas = determinarArrayNuevas(peliculaNueva)
  
  const useStyles=makeStyles((theme)=>({
    text:{
        color:"#ffffff"
    }
    }));
  const classes=useStyles();

  return (
    <div className="Home">
      
      

      
      
        
      
      <section className="sectionTv">
      
        <h1>Latest Movies</h1>
        {filtroPeliculasNuevas.map(peliculaNueva =>
          <InfoTarjeta
            key={peliculaNueva.id}
            id ={peliculaNueva.id}
            image={peliculaNueva.poster_path}
            title={peliculaNueva.title}
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


export default Latest;