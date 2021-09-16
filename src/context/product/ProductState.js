import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductContext from "./productContext";
import ProductReducer from "./ProductReducer";
import { ADD_TO_CARD, REMOVE_FROM_CARD, CREATE_PRODUCT } from "../action";
import { popularProducts } from "../../data/data";

const ProductState = (props) => {
  const initialState = {
    products: [...popularProducts],
    card: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const AddProduct = (data) => {
    let id = uuidv4();
    dispatch({ type: CREATE_PRODUCT, payload: { ...data, id } });
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
        AddProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
