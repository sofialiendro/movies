

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    id: 1,
    src: require('./img/b4gYVcl8pParX8AjkN90iQrWrWO.jpg'),
    altText: 'The Unholy',
    caption: "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
    header: "The Unholy"
  },
  {
    id: 2,
    src: require('./img/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg'),
    altText: 'Mortal Kombat',
    caption: 'Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsungs best warrior, Sub-Zero, seeks out and trains with Earth greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.',
    header: "Mortal Kombat"
  },
  {
    id: 3,
    src: require("./img/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"),
    altText: 'Godzilla vs. Kong',
    caption: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
    header: "Godzilla vs. Kong"
    
  },
  {
    id: 4,
    src: require('./img/rEm96ib0sPiZBADNKBHKBv5bve9.jpg'),
    altText: 'Without Remorse',
    caption: 'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
    header: "Without Remorse"
  },
  {
    id: 5,
    src: require('./img/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg'),
    altText: "Gabriel's Inferno Part II",
    caption: "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
    header: "Gabriel's Inferno Part II"
  }
];

const Carrusel = (props) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} width="100px" height="70px" />
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Carrusel;