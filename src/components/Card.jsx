import React, { useContext } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { smartPhone } from "../utils/responsive";
import ProductContext from "../context/product/productContext";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${smartPhone({ padding: "10px" })}
`;
const Title = styled.h2`
  font-weight: 400;
  text-align: center;
`;

const TopButtonWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${smartPhone({ justifyContent: "center" })}
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => (props.type === "outline" ? "1px solid black" : "none")};
  background-color: ${(props) =>
    props.type === "outline" ? "white" : "black"};
  color: ${(props) => (props.type === "outline" ? "black" : "white")};
  font-weight: 400;
  font-size: 17px;
`;

const Card = () => {
  const productContext = useContext(ProductContext);
  const { card, removeFromCard } = productContext;
  return (
    <Container>
      <Wrapper>
        <Title>My Basket</Title>
        <TopButtonWrapper>
          <TopButton type="outline">Continue Shopping</TopButton>
          <></>
        </TopButtonWrapper>
        {card.length === 0 ? (
          <h1>Your Basket is Empty</h1>
        ) : (
          <CardItem items={card} remove={removeFromCard} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Card;
