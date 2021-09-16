import React from "react";
import styled from "styled-components";
import { smartPhone } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${smartPhone({ flexDirection: "column" })}
`;

const Input = styled.input`
  flex: 2;
  width: 240px;
  margin-right: 20px;
  padding: 7px;
  border: 1px solid blue;
  ${smartPhone({ marginBottom: "20px" })}
`;
const Button = styled.button`
  border: none;
  padding: 8px 20px;
  background: blue;
  color: white;
  font-size: 17px;
  border-radius: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Input placeholder="Enter you email" />
        <Button>Subscribe</Button>
      </Wrapper>
    </Container>
  );
};

export default Footer;
