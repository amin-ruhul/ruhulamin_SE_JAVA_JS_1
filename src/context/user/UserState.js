import { useReducer } from "react";
import { LOGIN_USER, REGISTER_USER, LOGOUT } from "../action";
import userReducer from "./userReducer";
import UserContext from "./userContext";

const UserState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = (data) => {
    dispatch({ type: LOGIN_USER, payload: data.email });
  };

  const registerUser = (data) => {
    dispatch({ type: REGISTER_USER, payload: data.email });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <UserContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loginUser,
        registerUser,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
