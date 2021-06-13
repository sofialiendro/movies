const CarouselInfo = ({ movieId, title, overview }) => {
    return (
      <div
        className=" absolute top-1/2 z-10  h-3/5 flex flex-wrap justify-center"
        data-movie-id={movieId}
      >
        <h3 className="text-black ">{title}</h3>
        <p className="text-black ">{overview}</p>
      </div>
    );
  };
  
  export default CarouselInfo;