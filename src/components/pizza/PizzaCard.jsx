import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { addItem } from "../../context/cartActions";
import { useCartDispatch } from "../../context/cartContext";

const PizzaCard = ({ image, description, name, price, id }) => {
  const dispatch = useCartDispatch();
  const addToCart = (item) => dispatch(addItem(item));

  return (
    <Col md="3" className="mb-3">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-uppercase">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="info" className="mr-3">
            ${price}
          </Button>
          <Button
            onClick={() => addToCart({ id, image, description, name, price })}
            variant="primary"
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PizzaCard;
