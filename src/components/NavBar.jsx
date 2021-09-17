import React, { useContext, useRef } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { smartPhone } from "../utils/responsive";
import { Link } from "react-router-dom";
import ProductContext from "../context/product/productContext";
import UserContext from "../context/user/userContext.js";

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  ${smartPhone({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${smartPhone({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${smartPhone({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${smartPhone({ flex: "2", justifyContent: "center" })}
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
  ${smartPhone({ fontSize: "20px", textAlign: "center" })}
`;

const MenuItem = styled.span`
  font-size: 17px;
  cursor: pointer;
  margin-left: 20px;
  ${smartPhone({ fontSize: "12px", marginLeft: "10px" })}
  &:hover {
    background-color: rgba(208, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px 7px;
    transition: all 0.5s ease;
    color: white;
  }
`;

const Brand = styled.span`
  color: #d00000;
`;

const NavBar = () => {
  const term = useRef();

  // call the context
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);
  const { card, searchProduct, clearSearch } = productContext;
  const { user, isAuthenticated, logout } = userContext;

  // handle search value
  const handelChange = (e) => {
    if (term.current.value) {
      searchProduct(term.current.value);
    } else {
      clearSearch();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Brand>E</Brand>COM
          </Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Search"
              ref={term}
              onChange={handelChange}
            />
            <SearchIcon />
          </SearchContainer>
        </Center>
        <Right>
          {isAuthenticated && <>Hello {user}</>}
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem>Home</MenuItem>
          </Link>
          {!isAuthenticated && (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>Login</MenuItem>
              </Link>
            </>
          )}

          <Link to="/about" style={{ textDecoration: "none" }}>
            <MenuItem>About</MenuItem>
          </Link>

          {isAuthenticated && (
            <Link to="" style={{ textDecoration: "none" }}>
              <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Link>
          )}
          <Link to="/card">
            <MenuItem>
              <Badge badgeContent={card.length} color="primary">
                <ShoppingBasketOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
