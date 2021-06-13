import './InfoTarjeta.scss';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { Link} from 'react-router-dom';


const InfoTarjeta = ({ id, image, title, type, viewType}) => {
    

    return (
        <>
            {viewType==='InfoTarjeta'?
                <div className='InfoTarjeta'>
                    <Link className="link" to={`/${type}/${id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
                        <h3>{title}</h3>
                        <VisibilityOutlinedIcon/>
                    </Link> 
                
   
                </div>
                
                :

                <div className='InfoTarjetaHome'>
                    <div className='imagenTarjeta'>
                        
                            <img className='img'src={`https://image.tmdb.org/t/p/w500${image}`}/>
                    
                    </div>
                    <div className='tituloTarjeta'>
                        <Link className='link' to={`/${type}/${id}`}>
                            <h3>{title}</h3>
                        </Link> 

                    </div>
                    <div className='iconoTarjeta'>
                        <Link className='link' to={`/${type}/${id}`}><VisibilityOutlinedIcon/></Link> 
                    </div>

                </div>
            }
 
        </>
    )
}

export default InfoTarjeta;