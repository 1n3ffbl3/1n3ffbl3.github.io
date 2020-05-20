import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { mobile, tablet } from '../../utils/media';

export const HeroImageFrame = styled.div`
  padding: 70px 26px 26px;
  background-color: ${({ theme }) => theme.primaryWhite};
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
`;

export const HeroBgImage = styled(BackgroundImage)`
  top: 0;
  left: 0;
  padding: 50px 26px 26px;
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  ${mobile`
    width: 100%;
    height: 100%;
  `}

  ${tablet`
    width: 100%;
    height: 100%;
  `}
`;

export const Content = styled.div`
  position: absolute;
  color: black;
  top: 0;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const ButtonDiscover = styled.a`
    border: 1px solid ${({ theme }) => theme.primaryNavy};
    display: inline-block;
    padding: 13px 18px 10px 18px;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryNavy};
    text-transform: uppercase;
    position: center;
    letter-spacing: 2px;
    
    &:hover {
        color: ${({ theme }) => theme.primaryNavy};
        background-color: ${({ theme }) => theme.primaryHeather2};
        transition: opacity 1s 1.5s ease, background .7s, color .7s;
    }

    ${mobile`
        font-size: 10px;
    `}

    ${tablet`
        font-size: 16px;    
    `}
`;