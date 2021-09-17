import React, { useState } from "react";
import styled from "styled-components";
import { smartPhone } from "../../utils/responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe3e3;
`;
const Wrapper = styled.div`
  width: 37%;
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
  border-radius: 5px;
`;
const Button = styled.button`
  width: 30%;
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

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = data;
  // make toasts
  const successToast = () => {
    toast.success(" Success", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const nameToast = () => {
    toast.error("Name is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const emailToast = () => {
    toast.error("Email is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const passwordToast = () => {
    toast.error("password is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const password2Toast = () => {
    toast.error("Confirm password is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notMatchToast = () => {
    toast.error("password not match!", {
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
    // check field is empty
    if (!name) nameToast();
    if (!email) emailToast();
    if (!password) passwordToast();
    if (!password2) password2Toast();

    // check password is ok
    if (password !== password2) notMatchToast();

    if (name && email && password & (password2 === password)) {
      successToast();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
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
          <Input
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
