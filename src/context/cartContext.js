import React, { createContext, useContext, useReducer } from "react";
import cartReducer, { inititailSate } from "./cartReducer";

const StateContext = createContext();
const DispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, inititailSate);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={{ ...state }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useCartState = () => useContext(StateContext);
export const useCartDispatch = () => useContext(DispatchContext);
