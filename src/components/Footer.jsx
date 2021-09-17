import React from "react";
import styled from "styled-components";
import { smartPhone } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 50px 0;
  background: #4361ee;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${smartPhone({ flexDirection: "column" })}
`;

const Input = styled.input`
  width: 20%;
  margin-right: 20px;
  padding: 8px;
  border: 1px solid #6a040f;

  ${smartPhone({ marginBottom: "20px" })}
`;
const Button = styled.button`
  border: 1px solid #6a040f;
  padding: 10px 20px;
  background: #6a040f;
  color: white;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #6a040f;
    background: #fff;
    transition: all 0.5s ease;
  }
`;
const Text = styled.span`
  padding-top: 20px;
  color: #fff;
  text-align: center;
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Input placeholder="Enter you email" />
          <Button>Subscribe</Button>
        </Wrapper>
        <Text>©ruhul2021,all rights reserved</Text>
      </Container>
    </>
  );
};

export default Footer;
