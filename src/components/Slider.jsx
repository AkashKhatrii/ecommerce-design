import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { Flare } from "@material-ui/icons";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7eeee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  z-index: 1000;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
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
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      {/* div */}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {/* div */}
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* div */}
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            {/* div */}
            <ImgContainer>
              {/* div */}
              <Image src={item.img} /> {/* img */}
            </ImgContainer>
            <InfoContainer>
              {/* div */}
              <Title>{item.title}</Title> {/* h1 */}
              <Desc>{item.desc}</Desc> {/* p */}
              <Button>SHOP NOW</Button> {/* button */}
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
