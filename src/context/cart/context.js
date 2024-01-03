import { createContext, useContext, useReducer } from "react";
import cartReducer, { cartInitialState } from "./reducer";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const { cartState, cartDispatch } = useContext(CartContext);
  return { cartState, cartDispatch };
}
