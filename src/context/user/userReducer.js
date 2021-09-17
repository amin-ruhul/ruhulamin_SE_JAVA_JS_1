import { LOGIN_USER, REGISTER_USER, LOGOUT } from "../action";

// eslint-disable-next-line
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
