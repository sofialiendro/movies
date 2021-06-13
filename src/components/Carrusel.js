import React from "react";
import Slider from "react-slick";
import PelisCarousel from "./pelisCarousel";
import CarouselInfo from "./CarouselInfo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ movieInfo }) => {
  let imgArray = movieInfo.slice(0, -15);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  

  return (
    <div className="w-auto" style={{ maxHeight: "900px" }}>
      

      <Slider className="w-auto " {...settings}>
        {imgArray.map((part) => (
          <React.Fragment key={part.id}>
            <PelisCarousel className="" src={part.backdrop_path} />
            <CarouselInfo
              movieId={part.id}
              title={part.title}
              overview={part.overview}
            />
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
