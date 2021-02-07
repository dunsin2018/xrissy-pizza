import React from "react";
import { Row } from "react-bootstrap";
import { pizzaData } from "./data";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <Row className="mt-5">
      {pizzaData.map((pizza, index) => {
        return <PizzaCard {...pizza} key={index} />;
      })}
    </Row>
  );
};

export default PizzaList;
