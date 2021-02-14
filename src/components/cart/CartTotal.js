import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { clearCart } from "../../context/cartActions";
import { useCartDispatch } from "../../context/cartContext";

const CartTotal = ({ cartTotal }) => {
  const dispatch = useCartDispatch();

  const clearCartItems = () => dispatch(clearCart());

  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Button
              className="mb-3 px-3"
              variant="danger"
              onClick={clearCartItems}
            >
              Clear cart
            </Button>
            <h5>
              <span>Delivery Fee: </span>
              <strong>$13</strong>
            </h5>
            <h5>
              <span>Total In USD: </span>
              <strong>${cartTotal.usd}</strong>
            </h5>
            <h5>
              <span>Total In EUR: </span>
              <strong>€{cartTotal.eur}</strong>
            </h5>
            <Link to="/order">
              <Button variant="success" className="mb-3 px-3">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CartTotal;
