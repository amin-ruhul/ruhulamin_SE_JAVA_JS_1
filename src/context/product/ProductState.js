import React, { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./ProductReducer";
import { ADD_TO_CARD, REMOVE_FROM_CARD, LOAD_PRODUCT } from "../action";
import { popularProducts } from "../../data/data";

const ProductState = (props) => {
  const initialState = {
    products: [...popularProducts],
    card: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getALLProduct = () => {
    dispatch({ type: LOAD_PRODUCT });
  };

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
        products: state.products,
        addToCard,
        removeFromCard,
        getALLProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
