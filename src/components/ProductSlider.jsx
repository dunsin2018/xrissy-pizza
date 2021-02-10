import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import pizza1 from "../assets/bbq_chicken.jpg";
import pizza2 from "../assets/four_cheese.jpg";

const ProductSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={pizza1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pizza2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pizza1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductSlider;
