
import SearchInput from '../components/SearchInput';
import InfoTarjeta from './InfoTarjeta';
import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';

import { APIKEY } from '../utils/variables'
import { CallMissedSharp } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';


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

                if (data.results != undefined) {
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
           
        },
    }));
    const classes = useStyles();


    return (
        <>
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

        </>

    );
}


export default Search;