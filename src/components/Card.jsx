import React from "react";
import styled from "styled-components";
import { smartPhone } from "../utils/responsive";

const Container = styled.div`
  width: 30%;
  margin: 1%;
  padding: 1.33%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background: white;
  text-align: center;
  border-radius: 10px;
  ${smartPhone({ width: "90%" })}
`;

const Header = styled.h1`
  font-size: 35px;
  font-weight: 300;
  color: #e85d04;
  ${smartPhone({ fontSize: "25px" })}
`;

const Total = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #3a0ca3;
  ${smartPhone({ fontSize: "30px" })}
`;

const Card = ({ title, total }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Total>{total}</Total>
    </Container>
  );
};

export default Card;
