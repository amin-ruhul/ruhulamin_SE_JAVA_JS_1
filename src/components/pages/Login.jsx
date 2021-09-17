import React, { useState, useContext } from "react";
import styled from "styled-components";
import { smartPhone } from "../../utils/responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../context/user/userContext.js";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe3e3;
  scroll-bar: none;
`;
const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  ${smartPhone({ width: "85%", padding: "10px" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
`;
const Input = styled.input`
  margin: 20px 10px 0px 0px;
  padding: 7px;
  outline: none;
  border: 1px solid #22577a;
`;
const Button = styled.button`
  width: 25%;
  margin: 10px 0;
  padding: 10px 15px;
  border: 1px solid #22577a;
  background: #22577a;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  ${smartPhone({ width: "100%" })}

  &:hover {
    color: #22577a;
    background: white;
    transition: all 0.5s ease;
  }
`;
// configure testify
toast.configure();
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // create history
  const history = useHistory();
  // call context
  const userContext = useContext(UserContext);
  const { loginUser, user, isAuthenticated } = userContext;

  const { email, password } = data;
  // make toasts
  const successToast = () => {
    toast.success(" Success", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const emailToast = () => {
    toast.error("Email is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const passwordToast = () => {
    toast.error("Password is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const invalidToast = () => {
    toast.error("Invalid Credential!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) emailToast();
    if (!password) passwordToast();

    if (email === "user@gmail.com" && password === "user123") {
      loginUser(data);
      successToast();
      history.push("/");
    } else if (email === "admin@gmail.com" && password === "admin123") {
      loginUser(data);
      successToast();
      history.push("/dashboard");
    } else {
      invalidToast();
    }
  };
  console.log("user", user);
  console.log("Auth", isAuthenticated);
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button>Sign In</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
