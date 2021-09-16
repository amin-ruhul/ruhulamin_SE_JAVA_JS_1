import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ProductContext from "../context/product/productContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  margin-bottom: 5px;
  &:hover {
    color: #93b5c6;
    background: white;
  }
`;
const ClearButton = styled.button`
  padding: 7px 10px;
  font-size: 15px;
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

// configure testify
toast.configure();

const Dashboard = () => {
  const [data, setData] = useState({
    name: "",
    img: "",
    price: "",
    profit: "",
    tag: "",
  });
  const { name, img, price, profit, tag } = data;
  const productContext = useContext(ProductContext);
  const {
    products,
    AddProduct,
    current,
    setCurrent,
    updateProduct,
    clearCurrent,
    deleteProduct,
  } = productContext;

  console.log(products);

  // make toasts
  const successToast = () => {
    toast.success("Product Add Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const updateToast = () => {
    toast.success("Product update Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const nameToast = () => {
    toast.error("Name is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const imgToast = () => {
    toast.error("Url is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const priceToast = () => {
    toast.error("Price is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const profitToast = () => {
    toast.error("Profit is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const tagToast = () => {
    toast.error("Type is Require!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // set state value
  const handelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // clear the current state
  const clearState = () => {
    setData({
      name: "",
      img: "",
      price: "",
      profit: "",
      tag: "",
    });
  };
  // create new product
  const handelSubmit = (e) => {
    e.preventDefault();
    data.price = parseInt(data.price);
    data.profit = parseInt(data.profit);

    // check the values
    if (!name) nameToast();
    if (!img) imgToast();
    if (!price) priceToast();
    if (!profit) profitToast();
    if (!tag) tagToast();

    if (name && img && price && profit && tag) {
      if (current) {
        updateProduct(data);
        updateToast();
        clearState();
        clearCurrent();
      } else {
        AddProduct(data);
        successToast();
        clearState();
      }
    }
  };

  // set current
  useEffect(() => {
    if (current) {
      setData(current);
    } else {
      clearState();
    }
  }, [current]);

  console.log("data", data);
  console.log("current", current);
  return (
    <Container>
      <Wrapper>
        <CardWrapper>
          <Card>
            <Text> {current ? "Update Product" : "Add Product"}</Text>
            <Form onSubmit={handelSubmit}>
              <Input
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={handelChange}
                value={name}
              />
              <Input
                type="number"
                placeholder="Product Price"
                name="price"
                onChange={handelChange}
                value={price}
              />
              <Input
                type="text"
                placeholder="Product Image Url"
                name="img"
                onChange={handelChange}
                value={img}
              />
              <Input
                type="number"
                placeholder="Product Profit"
                name="profit"
                onChange={handelChange}
                value={profit}
              />
              <Select name="tag" id="" onChange={handelChange}>
                <option value={tag}>Product Type</option>
                <option value="Ram">RAM</option>
                <option value="Motherboard">MOTHERBOARD</option>
                <option value="Graphics Card">GRAPHICS CARD</option>
              </Select>
              <Button>{current ? "Update" : "ADD"}</Button>
            </Form>
            {current && (
              <ClearButton onClick={() => clearState()}>Clear</ClearButton>
            )}
          </Card>
        </CardWrapper>
        <Product>
          <Text>Products</Text>
          {products.map((product) => (
            <ProductWrapper key={product.id}>
              <Image src={product.img} />
              <Name>{product.name}</Name>
              <Price>$ {product.price}</Price>
              <Profit>{product.profit} %</Profit>
              <Type>Ram</Type>
              <Action>
                <SmallBtn type="edit" onClick={() => setCurrent(product)}>
                  Edit
                </SmallBtn>
                <SmallBtn onClick={() => deleteProduct(product.id)}>
                  Delete
                </SmallBtn>
              </Action>
            </ProductWrapper>
          ))}
        </Product>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
