import { useState, useContext } from "react";
import styled from "styled-components";
import { sliderItems } from "../data/data";
import { smartPhone } from "../utils/responsive";
import ProductContext from "../context/product/productContext";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  ${smartPhone({ display: "none" })}
`;

const SliderBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === "left" && "10px"};
  right: ${(props) => props.position === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px 70px;
`;

const Title = styled.h1`
  padding-top: 20px;
  font-size: 50px;
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Price = styled.div`
  font-size: 40px;
  padding: 10px 30px;
  font-weight: 300;
  color: #dc2f02;
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #aa076b 0%,
    #61045f 51%,
    #aa076b 100%
  );
  margin: 10px;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;

  &:hover {
    background-position: right center;
    color: #fff;
  }
`;

const Slider = () => {
  const productContext = useContext(ProductContext);
  const { addToCard } = productContext;
  const [IndexPosition, setIndexPosition] = useState(0);
  const handleClick = (position) => {
    if (position === "left") {
      setIndexPosition(IndexPosition > 0 ? IndexPosition - 1 : 2);
    } else {
      setIndexPosition(IndexPosition < 2 ? IndexPosition + 1 : 0);
    }
  };

  return (
    <Container>
      <SliderBtn position="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </SliderBtn>
      <Wrapper slideIndex={IndexPosition}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Price> ${item.price}</Price>
              <Button onClick={() => addToCard(item)}>Buy Now</Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <SliderBtn position="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </SliderBtn>
    </Container>
  );
};

export default Slider;
