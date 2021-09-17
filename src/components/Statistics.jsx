import React, { useContext } from "react";
import Card from "./Card";
import styled from "styled-components";
import ProductContext from "../context/product/productContext";
import { smartPhone } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  ${smartPhone({ flexDirection: "column", alignItems: "center" })}
`;

const Statistics = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext;
  return (
    <Container>
      <Card total={products.length} title="Total Product" />
      <Card total="$ 0" title="Total Sale" />
      <Card title="Profitable Product" />
    </Container>
  );
};

export default Statistics;
