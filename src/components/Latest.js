import InfoTarjeta from '../views/InfoTarjeta';
import { URL_NEW_MOVIES, APIKEY } from '../utils/variables';
import useFetch from '../hooks/useFetch';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const determinarArrayNuevas = (array) => {
  return array.slice(0, 20)
}


const Latest = () => {

  const peliculaNueva = useFetch(`${URL_NEW_MOVIES}api_key=${APIKEY}`)
  const filtroPeliculasNuevas = determinarArrayNuevas(peliculaNueva)

  const useStyles = makeStyles((theme) => ({
    Home: {
      color: "white",
      "@media (max-width: 700px)": {
        textAlign: "center",

      }
    },
    text: {
      color: "#ffffff",
      padding: "1%",
      fontSize: "25px",
    "@media (max-width: 414px)": {
        fontSize: "15px"
      }
    },
    sectionLatest: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      "@media (max-width: 700px)": {
        justifyContent: "center",
      }
    },

  }));
  const classes = useStyles();

  return (
  
    <div className={classes.Home}>
      <h1>Latest Movies</h1>
      <section className={classes.sectionLatest}>
        {filtroPeliculasNuevas.map(peliculaNueva =>
          <InfoTarjeta
            viewType='InfoTarjeta'
            key={peliculaNueva.id}
            id={peliculaNueva.id}
            image={peliculaNueva.poster_path}
            title={peliculaNueva.title}
            type='movie'

          />
        )}
      </section>

      <Box bgcolor="#ff0000" width="100%" height="100px" 
      justifyContent="center" alignItems="center">
        <Typography align="center" className={classes.text} variant="h5">
          Movie Finder by Euge and Sofi
        </Typography>
      </Box>

    </div>
  
  )
}


export default Latest;