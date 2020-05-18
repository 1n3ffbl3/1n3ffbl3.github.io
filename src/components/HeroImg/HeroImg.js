import React, { useState, useRef } from 'react';
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
	const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
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
        <Content style={{ flex: "1"}}>
          <MainHeader>
            Junior <br/>
            Web Developer
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