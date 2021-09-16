import React, { useContext } from "react";
import styled from "styled-components";
import ProductContext from "../context/product/productContext";

const Container = styled.div`
  padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50vh;
`;
const CardWrapper = styled.div`
  flex: 1;
`;
const Card = styled.div`
  width: 60%;
  margin-left: 20%;
  padding: 20px;
  box-shadow: 0px 2px 4px black;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h1`
  font-size: 25px;
  font-weight: 300;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 6px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 6px;
`;

const Product = styled.div`
  flex: 1;
`;
const Button = styled.button`
  padding: 7px 0;
  font-size: 15px;
  color: white;
  background: #93b5c6;
  cursor: pointer;
  border: 0.5px solid #93b5c6;
  &:hover {
    color: #93b5c6;
    background: white;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid green;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
`;
const Name = styled.p``;
const Price = styled.p``;
const Profit = styled.p``;
const Type = styled.p``;
const Action = styled.div``;
const SmallBtn = styled.button`
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border: ${(props) =>
    props.type === "edit" ? "1px solid green" : "1px solid red"};
  background: ${(props) => (props.type === "edit" ? "green" : " red")};
  color: white;
`;

const Dashboard = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext;

  console.log(products);
  return (
    <Container>
      <Wrapper>
        <CardWrapper>
          <Card>
            <Text>Add Product</Text>
            <Form>
              <Input type="text" placeholder="Product Name" />
              <Input type="text" placeholder="Product Price" />
              <Input type="text" placeholder="Product Image Url" />
              <Input type="text" placeholder="Product Profit" />
              <Select name="" id="">
                <option value="">Product Type</option>
                <option value="Ram">RAM</option>
                <option value="Motherboard">MOTHERBOARD</option>
                <option value="Graphics Card">GRAPHICS CARD</option>
              </Select>
              <Button>Submit</Button>
            </Form>
          </Card>
        </CardWrapper>
        <Product>
          <Text>Products</Text>
          {products.map((product) => (
            <ProductWrapper key={product.id}>
              <Image src={product.img} />
              <Name>{product.name}</Name>
              <Price>$ {Product.price}</Price>
              <Profit>10% {Product.profit}</Profit>
              <Type>Ram</Type>
              <Action>
                <SmallBtn type="edit">Edit</SmallBtn>
                <SmallBtn>Delete</SmallBtn>
              </Action>
            </ProductWrapper>
          ))}
          {/* <ProductWrapper>
            <Image src="https://images.pexels.com/photos/3846157/pexels-photo-3846157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <Name>Product 1</Name>
            <Price>$ 100</Price>
            <Profit>10%</Profit>
            <Type>Ram</Type>
            <Action>
              <SmallBtn type="edit">Edit</SmallBtn>
              <SmallBtn>Delete</SmallBtn>
            </Action>
          </ProductWrapper> */}
        </Product>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
