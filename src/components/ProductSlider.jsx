import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const ProductSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2Fbbq_chicken.jpg?alt=media&token=b19e5e99-e1ef-42f0-a7fc-7890d7d96cbd"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2Ffour_cheese.jpg?alt=media&token=b315ce05-1762-4d5c-9a5c-adbcca051ed6"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2Fbbq_chicken.jpg?alt=media&token=b19e5e99-e1ef-42f0-a7fc-7890d7d96cbd"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductSlider;
