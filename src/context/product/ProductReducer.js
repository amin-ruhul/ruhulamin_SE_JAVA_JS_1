import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../action";

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
    default:
      return state;
  }
};
