import React, { useState } from "react";

export const CartContext = React.createContext();

export const PCard = (props) => {
  const [cartPage, setCartPage] = useState([]);
  return (
    <CartContext.Provider value={[cartPage, setCartPage]}>
      {props.children}
    </CartContext.Provider>
  );
};
