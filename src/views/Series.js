import useFetch from '../hooks/useFetch'
import { URL_POPULAR_SERIES, URL_BEST_SERIES, URL_LIVE_NOW_SERIES, APIKEY } from '../utils/variables'
import { determinarArray } from '../utils/helpers'
import InfoTarjeta from './InfoTarjeta'



const Series = () => {

  const popularSeries = useFetch(`${URL_POPULAR_SERIES}api_key=${APIKEY}`)
  const bestSeries = useFetch(`${URL_BEST_SERIES}api_key=${APIKEY}`)
  const liveNowSeries = useFetch(`${URL_LIVE_NOW_SERIES}api_key=${APIKEY}`)

  const filtroPopularSeries = determinarArray(popularSeries)
  const filtroBestSeries = determinarArray(bestSeries)
  const filtroNewSeries = determinarArray(liveNowSeries)


 
  return (
    <section className="Series">
     
      
          <div className="PopularSeries">
            <h2>Popular Series</h2>
            {filtroPopularSeries.map(serie =>
          <InfoTarjeta
          viewType='InfoTarjeta'
            key={serie.id}
            id ={serie.id}
            image={serie.poster_path}
            title={serie.name}
            type="tv"
            
            />
            )}
            </div>
            <div className="BestSeries">
                <h2>Best Series</h2>
                {filtroBestSeries.map(serie =>
            <InfoTarjeta
            viewType='InfoTarjeta'
                key={serie.id}
                id ={serie.id}
                image={serie.poster_path}
                title={serie.name}
                type="tv"
       

            />
            )}
            </div>
            <div className="NewSeries">
                <h2>New Series</h2>
                {filtroNewSeries.map(serie =>
            <InfoTarjeta
            viewType='InfoTarjeta'
                key={serie.id}
                id ={serie.id}
                image={serie.poster_path}
                title={serie.name}
                type="tv"
             

            />
            )}
          </div>
  
    </section>

  )


}

export default Series;
