import InfoTarjeta from '../views/InfoTarjeta';

import { URL_POPULAR_MOVIES, APIKEY } from '../utils/variables'
import useFetch from '../hooks/useFetch'

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import {makeStyles} from '@material-ui/core/styles'


const determinarArrayPopulares = (array) => {
    return array.slice(0, 20)
 }
 

const Popular = () => {


  
  const peliculaPopular = useFetch (`${URL_POPULAR_MOVIES}api_key=${APIKEY}`)



  
  const filtroPeliculasPopulares = determinarArrayPopulares(peliculaPopular)
  
  const useStyles=makeStyles((theme)=>({
    text:{
        color:"#ffffff"
    },
    sectionPopular:{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-between',
      alignItems:'center'
    },

    }));
  const classes=useStyles();

  return (
    <div className="Home">
      
      <h1>Popular Movies</h1>
      <section className={classes.sectionPopular}>
    
        {filtroPeliculasPopulares.map(peliculaPopular =>
          <InfoTarjeta
            viewType='InfoTarjeta'
            key={peliculaPopular.id}
            id ={peliculaPopular.id}
            image={peliculaPopular.poster_path}
            title={peliculaPopular.title}
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


export default Popular;