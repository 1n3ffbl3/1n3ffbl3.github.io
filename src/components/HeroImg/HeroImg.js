import React, { useState, useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Burger from '../Navigation/Burger/Burger';
import MenuPage from '../Navigation/MenuPage/MenuPage';
import MainHeader from '../Header/MainHeader';
import { useOnClickOutside } from '../../hooks/hooks';
import { HeroImageFrame, HeroBgImage, Content, ButtonDiscover } from './SharedStyledComponents';


const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      binoculars: file(relativePath: { eq: "binoculars1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 10000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.binoculars.childImageSharp.fluid;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    const img = document.getElementById("backgroundImage");
    setImage(img);
  }, []);
 
  const body = document.getElementsByTagName('body')[0];
  const handleScroll = (event) => {
    if (!image) {
      return;
    }

    const imageHeight = image.offsetHeight;
    const distanceFromTop = body.getBoundingClientRect().top;

    if (distanceFromTop >= 0) {
      return;
    }

    if (Math.abs(distanceFromTop) > imageHeight) {
      if (image.style.opacity !== 1) {
        image.style.opacity = 1;
      } else {
        return;
      }
    }

    let opacityValue = Math.abs(distanceFromTop) / imageHeight;
    image.style.opacity = 1 - opacityValue;
  }

  document && document.addEventListener("scroll", (event) => handleScroll(event));

  return (
    <HeroImageFrame>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuPage open={open} setOpen={setOpen} />
      </div>
      <HeroBgImage
        title="binoculars"
        fluid={imageData}
        id="backgroundImage">
        <Content style={{ width: "50vw"}}>
          <MainHeader>
            Software <br/>
            Developer
          </MainHeader>
          <div>
            <ButtonDiscover id="btnDiscover">
              Discover
            </ButtonDiscover>
          </div>
        </Content>
			  <div style={{ width: "50vw"}}></div>
      </HeroBgImage>
    </HeroImageFrame>
  )
};

export default HeroImg;