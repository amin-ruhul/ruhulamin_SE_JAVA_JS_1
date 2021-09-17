import React from "react";
import styled from "styled-components";
import { smartPhone } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${smartPhone({ flexDirection: "column" })}
`;

const ProductInfo = styled.div`
  flex: 4;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductContainer = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 100px;
  ${smartPhone({ width: "50px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const Action = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const ProductSummery = styled.div`
  flex: 2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f48c06;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  padding: 3px 5px;
  background: #9d0208;
  border: 1px solid #9d0208;
  cursor: pointer;
  color: white;
  &:hover {
    color: #9d0208;
    background: #fff;
    transition: all 0.5s ease;
  }
`;

const CardItem = ({ items, remove }) => {
  const getBasketTotal = (basket = items) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <Container>
      <ProductInfo>
        {items.map((item) => (
          <Product key={item.id}>
            <ProductContainer>
              <Image src={item.img} />
              <Details>
                <ProductName>
                  <b>Product:</b> {item.name}
                </ProductName>
                <ProductPrice>
                  <b>Price:</b> $ {item.price}
                </ProductPrice>
              </Details>
            </ProductContainer>
            <Action>
              <RemoveButton onClick={() => remove(item.id)}>
                Remove
              </RemoveButton>
            </Action>
          </Product>
        ))}
      </ProductInfo>

      <ProductSummery>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>$ 80</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice>$ 0.00</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>$ 0.00</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>$ {getBasketTotal()}</SummaryItemPrice>
        </SummaryItem>
        <Button>CHECKOUT NOW</Button>
      </ProductSummery>
    </Container>
  );
};

export default CardItem;
