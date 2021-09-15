import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe3e3;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
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

  &:hover {
    color: #22577a;
    background: white;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login In</Title>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign In</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
