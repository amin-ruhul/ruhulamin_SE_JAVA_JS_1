import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  height: 90vh;
`;
const Header = styled.h1`
  font-size: 50px;
  font-weight: 300;
`;

const Text = styled.p`
  font-size: 17px;
`;

const About = () => {
  return (
    <Container>
      <Header>About Us</Header>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum!{" "}
      </Text>
    </Container>
  );
};

export default About;
