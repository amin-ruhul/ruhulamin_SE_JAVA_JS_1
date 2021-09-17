import React, { useState, useContext } from "react";
import styled from "styled-components";
import Product from "./Product";
import Pagination from "./Pagination";
import ProductContext from "../context/product/productContext";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const productContext = useContext(ProductContext);
  const { products, filtered } = productContext;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const displayProduct = filtered ? filtered : products;
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayProduct.slice(indexOfFirstPost, indexOfLastPost);

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
        totalPosts={displayProduct.length}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
