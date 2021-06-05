import './InfoTarjeta.scss';

import { Link} from 'react-router-dom';

const InfoTarjeta = ({ id, image, title, type}) => {
    

    return (
        
        <div className="InfoTarjeta"> 
          
           <Link to={`/${type}/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
                <h3>{title}</h3>
            </Link> 
             
        </div>
    )
}

export default InfoTarjeta;
