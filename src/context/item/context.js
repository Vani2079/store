import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import itemReducer, { initialState } from "./reducer";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemState, itemDispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider value={{ itemState, itemDispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const { itemState, itemDispatch } = useContext(ItemContext);

  return { itemState, itemDispatch };
};
