import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PizzaList from "../../components/pizza/PizzaList";
import ProductSlider from "../../components/ProductSlider";

class HomePage extends Component {
  render() {
    return (
      <div mt-5>
        <ProductSlider />
        <Container>
          <h1 className="text-center mt-3 text-danger">TRUE ITALIAN FLAVOR</h1>
          <h6 className="text-center mt-3 text-muted">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna
          </h6>
          <PizzaList />
        </Container>
      </div>
    );
  }
}

export default HomePage;
