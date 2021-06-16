import SearchInput from '../components/SearchInput';
import InfoTarjeta from './InfoTarjeta';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { APIKEY } from '../utils/variables'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const Search = () => {



    const [valorDelInput, setValorDelInput] = useState('');

    const [peliculas, setPeliculas] = useState([]);

    const handleChange = e => {
        setValorDelInput(e.target.value);
    };


    useEffect(() => {
        const query = valorDelInput
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
            .then(res => res.json())
            .then(data => {

                if (data.results !== undefined) {
                    setPeliculas(data.results)
                }


            });

    }, [valorDelInput]);

    const useStyles = makeStyles((theme) => ({
        contenedorResultados: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            "@media (max-width: 540px)": {
                justifyContent: "center"

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
    }));
    const classes = useStyles();


    return (
        <div>
            <SearchInput
                valorDelInput={valorDelInput}
                handleChange={handleChange}
            />

            <section className={classes.contenedorResultados}>

                {peliculas.map(pelicula =>
                    <InfoTarjeta
                        viewType='InfoTarjeta'
                        key={pelicula.id}
                        id={pelicula.id}
                        image={pelicula.poster_path}
                        title={pelicula.title}
                        type='movie'

                    />
                )}
              
            </section>

            <Box bgcolor="#ff0000" width="100%" height="100px" display="flex"
            position= "fixed" bottom="0" justifyContent="center" alignItems="center">
                    <Typography className={classes.text} >
                        Movie Finder by Euge and Sofi
                    </Typography>
                </Box>
        </div>

    );
}


export default Search;