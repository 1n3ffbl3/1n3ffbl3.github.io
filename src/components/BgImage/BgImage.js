import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";


const HeroImageFrame = styled.div`
  padding: 70px 26px 26px;
  maxWidth: 960px;
  background-color: ${({ theme }) => theme.primaryWhite};
  position: relative;
`;

const HeroBgImage = styled(Img)`
  top: 0;
  left: 0;
  padding: 50px 26px 26px;
  width: 100%;
  height: 100vh;
  index-z: -1;
  position: absolute;
`;

const Content = styled.div`
  position: absolute;
  color: black;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
`;

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  children,
  className
}) => (
  <HeroImageFrame>
    <HeroBgImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}>
    </HeroBgImage>
    <Content className={className}>{children}</Content>
  </HeroImageFrame>
);


export default BgImage;