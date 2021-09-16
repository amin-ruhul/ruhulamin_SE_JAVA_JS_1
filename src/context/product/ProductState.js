import React, { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./ProductReducer";
import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../action";

const ProductState = (props) => {
  const initialState = {
    card: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const addToCard = (data) => {
    dispatch({ type: ADD_TO_CARD, payload: data });
  };

  const removeFromCard = (id) => {
    dispatch({ type: REMOVE_FROM_CARD, payload: id });
  };
  return (
    <ProductContext.Provider
      value={{
        card: state.card,
        addToCard,
        removeFromCard,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
