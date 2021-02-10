import React from "react";
import { Container } from "react-bootstrap";
import CartItems from "../../components/cart/CartItems";
import { useCartState } from "../../context/cartContext";

const CartPage = () => {
  const { cartItems } = useCartState();

  console.log(cartItems);
  return (
    <Container className="mt-5">
      {cartItems.length ? <CartItems /> : <h1>Cart is Empty</h1>}
      <br />
    </Container>
  );
};

export default CartPage;
