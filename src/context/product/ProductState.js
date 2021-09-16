import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductContext from "./productContext";
import ProductReducer from "./ProductReducer";
import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CREATE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../action";
import { popularProducts } from "../../data/data";

// initial state
const ProductState = (props) => {
  const initialState = {
    products: [...popularProducts],
    card: [],
    current: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  //***********  manage product **********
  // insert product
  const AddProduct = (data) => {
    let id = uuidv4();
    dispatch({ type: CREATE_PRODUCT, payload: { ...data, id } });
  };

  // set current product
  const setCurrent = (current) => {
    dispatch({ type: SET_CURRENT, payload: current });
  };

  // clear Current Product
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT, payload: null });
  };

  // update contact

  const updateProduct = (product) => {
    dispatch({ type: UPDATE_PRODUCT, payload: product });
  };

  //
  const deleteProduct = (id) => {
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };

  //***********  manage cart **********

  // ad item to card
  const addToCard = (data) => {
    dispatch({ type: ADD_TO_CARD, payload: data });
  };

  // remove item from cart
  const removeFromCard = (id) => {
    dispatch({ type: REMOVE_FROM_CARD, payload: id });
  };
  return (
    <ProductContext.Provider
      value={{
        card: state.card,
        products: state.products,
        current: state.current,
        addToCard,
        removeFromCard,
        AddProduct,
        setCurrent,
        clearCurrent,
        updateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
