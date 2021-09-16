import React, { useContext } from "react";
import styled from "styled-components";
import { smartPhone } from "../utils/responsive";
import ProductContext from "../context/product/productContext";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  background: white;
  padding-bottom: 20px;
  ${smartPhone({ width: "100%" })}
`;
const Image = styled.img`
  width: 100%;
  height: 75%;
`;
const InfoWrapper = styled.div`
  padding: 10px 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: 300;
`;
const Price = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 2px;
`;

const Product = ({ item }) => {
  const productContext = useContext(ProductContext);
  const { addToCard } = productContext;

  return (
    <Container>
      <InfoWrapper>
        <Name>{item.name}</Name>
        <Price>${item.price}</Price>
      </InfoWrapper>

      <Image src={item.img} />
      <ButtonWrapper>
        <Button onClick={() => addToCard(item)}>Add To Card</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Product;
