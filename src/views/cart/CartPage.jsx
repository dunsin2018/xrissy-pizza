import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CartItems from "../../components/cart/CartItems";
import CartTotal from "../../components/cart/CartTotal";
import { useCartState } from "../../context/cartContext";

const CartPage = () => {
  const [cartTotal, setTotal] = useState({
    usd: 0,
    eur: 0,
  });

  const { cartItems } = useCartState();

  useEffect(() => {
    addTotals();
    // eslint-disable-next-line
  }, [cartItems]);

  const addTotals = () => {
    let subTotal = 0;
    cartItems.map((item) => (subTotal += item.total));

    const total = subTotal + 13;
    const totalInEuro = total * 0.83;
    setTotal({
      usd: total.toFixed(2),
      eur: totalInEuro.toFixed(2),
    });
  };

  return (
    <Container className="mt-5">
      {cartItems.length ? (
        <React.Fragment>
          <CartItems />
          <CartTotal cartTotal={cartTotal} />
        </React.Fragment>
      ) : (
        <h1>Cart is Empty</h1>
      )}
      <br />
    </Container>
  );
};

export default CartPage;
