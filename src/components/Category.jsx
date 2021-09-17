import Card from "./Card";
import styled from "styled-components";
import { smartPhone } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  ${smartPhone({ flexDirection: "column", alignItems: "center" })}
`;
const Header = styled.h1`
  font-size: 35px;
  padding: 10px 0;
  font-weight: 300;
  color: #3a0ca3;
  text-align: center;
  ${smartPhone({ fontSize: "25px" })}
`;

const Category = () => {
  return (
    <>
      <Header>Category</Header>
      <Container>
        <Card
          type="category"
          name="RAM"
          img="https://m.media-amazon.com/images/I/61u24xpGXeL._AC_SY450_.jpg"
        />
        <Card
          type="category"
          name="MOTHERBOARD"
          img="https://m.media-amazon.com/images/I/61EKp+npuQS._AC_SL1024_.jpg"
        />
        <Card
          type="category"
          name="GRAPHICS CARD"
          img="https://cdn.mos.cms.futurecdn.net/eMm7C5vJisPgrLu2oeAeVA.jpg"
        />
      </Container>
    </>
  );
};

export default Category;
