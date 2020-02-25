import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

/**
 * Author of this code is GitHub user @maximakymenko
 * Repository: https://github.com/maximakymenko/react-burger-menu-article-app
 */
const StyledMenuPage = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryWhite};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    width: 100%;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

    span {
      cursor: pointer;
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primarySubtile};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.primaryDark};
      }
    }
`;

const MenuPage = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenuPage open={open} aria-hidden={!isHidden} {...props}>
      <span onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)} role="button" tabIndex={tabIndex} id="navAboutMe">
        About me
      </span>
      <span onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)} role="button" tabIndex={tabIndex} id="navProjects">
        Projects
        </span>
      <span onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)} role="button" tabIndex={tabIndex} id="navContact">
        Contact
      </span>
    </StyledMenuPage>
  )
}

MenuPage.propTypes = {
  open: bool.isRequired,
}

export default MenuPage;