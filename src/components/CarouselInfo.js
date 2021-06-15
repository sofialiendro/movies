import {makeStyles} from '@material-ui/core/styles'


const CarouselInfo = ({ movieId, title, overview }) => {


  const useStyles=makeStyles((theme)=>({
    textBlack:{
       padding:"1%",
       textAlign:"center",
       margin:"0"
    },
    textBlackTitle:{
      padding:"1%",
      textAlign:"center",
      fontSize:"30px",
      fontStyle:"bold",
      "@media (max-width: 300px)": {
        fontSize:"15px"
      }
     

    }
    }))
  const classes=useStyles();



    return (
      <div
        className=" absolute top-1/2 z-10  h-3/5 flex flex-wrap justify-center "
        data-movie-id={movieId}
      >
        <h3 className={classes.textBlackTitle}>{title}</h3>
      <p className={classes.textBlack}>{overview}</p>
      </div>
    );
  };
  
  export default CarouselInfo