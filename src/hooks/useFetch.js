import { useState, useEffect } from 'react'

// este hook espera dos parametros, pero ustedes le estan pasando solo url. ojo!
// funciona, pero borren ese segundo param que no se usa
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
