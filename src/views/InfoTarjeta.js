import './InfoTarjeta.scss';
import Button from 'react-bootstrap/Button'

const InfoTarjeta = ({ title, image, id, handleClickDetalle, type}) => {
    
    const handleClick = () => {
        handleClickDetalle(id,type)
    }

    return (
        <div className="InfoTarjeta">
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <h3>{title}</h3>
            <Button onClick={handleClick} variant="primary">ver detalle</Button>
        </div>
    )
}

export default InfoTarjeta;
