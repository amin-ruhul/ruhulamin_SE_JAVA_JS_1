import React, { useContext } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { smartPhone } from "../utils/responsive";
import { useHistory } from "react-router-dom";
import ProductContext from "../context/product/productContext";

const Container = styled.div`
  padding-bottom: 20px;
`;
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

  &:hover {
    background: #560bad;
    color: white;
    transition: all 0.5s ease;
  }
`;

const Card = () => {
  // call the context
  const productContext = useContext(ProductContext);
  const { card, removeFromCard } = productContext;

  //create history
  const history = useHistory();

  // change history
  const goToHome = () => {
    history.push("/");
  };
  return (
    <Container>
      <Wrapper>
        <Title>My Basket</Title>
        <TopButtonWrapper>
          <TopButton type="outline" onClick={() => goToHome()}>
            Continue Shopping
          </TopButton>
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
