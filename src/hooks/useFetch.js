import { useState, useEffect } from 'react'

const useFetch = (url, apikey) => {

const [peliculas, setPeliculas] = useState ([])

useEffect(() => {
    fetch(url, apikey)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))

}, []);

    return peliculas
}

export default useFetch
