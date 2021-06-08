const myStyle={
  
  width:'100%',
  height:'500px',
  };


const PelisCarousel = ({ src }) => {
    return (
      <img
        className="object-cover w-full"
        style={myStyle}
        src={`https://image.tmdb.org/t/p/original/${src}`}
        alt="movie poster"
      />
    );
  };

  export default PelisCarousel;