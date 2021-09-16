import React, { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data/data";
import Product from "./Product";
import Pagination from "./Pagination";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = popularProducts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Wrapper>
        {currentPosts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={popularProducts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
