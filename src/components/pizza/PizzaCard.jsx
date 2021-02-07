import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const PizzaCard = ({ image, description, name, price }) => {
  return (
    <Col md="4" className="mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-uppercase">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="info" className="mr-3">
            ${price}
          </Button>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PizzaCard;
