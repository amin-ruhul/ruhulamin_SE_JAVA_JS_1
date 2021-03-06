import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CREATE_PRODUCT,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  SEARCH_CLEAR,
} from "../action";

// eslint-disable-next-line
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CARD:
      return {
        ...state,
        card: [...state.card, payload],
      };
    case REMOVE_FROM_CARD:
      return {
        ...state,
        card: state.card.filter((item) => item.id !== payload),
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id !== payload.id ? product : payload
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        filtered: state.products.filter((product) => {
          const regex = new RegExp(`${payload}`, `gi`);
          return product.name.match(regex) || product.tag.match(regex);
        }),
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        filtered: payload,
      };
    default:
      return state;
  }
};
