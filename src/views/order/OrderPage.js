import React from "react";
import { Container } from "react-bootstrap";
import Order from "../../components/oder/Order";

const OrderPage = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center">Complete Oder</h3>
      <Order />
    </Container>
  );
};

export default OrderPage;
