import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding: 3px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
const Logo = styled.h2`
  font-weight: 700;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background-color: green;
  }
`;
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ECOM</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input type="text" placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingBasketOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
