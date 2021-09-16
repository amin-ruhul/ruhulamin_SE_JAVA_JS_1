import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background: blue;
  border: 1px solid blue;
`;
const Item = styled.span`
  padding: 5px 7px;
  margin-right: 1px;
  cursor: pointer;
  background: white;
  box-shadow: 2px 2px solid black;
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <Wrapper>
        {pageNumbers.map((number) => (
          <Item key={number} onClick={() => paginate(number)}>
            {number}
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Pagination;
