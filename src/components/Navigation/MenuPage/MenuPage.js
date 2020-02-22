import React from 'react';
import { bool } from 'prop-types';
import { StyledMenuPage } from './MenuPage.styled';

/**
 * Author of this code is GitHub user @maximakymenko
 * Repository: https://github.com/maximakymenko/react-burger-menu-article-app
 */
const MenuPage = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenuPage open={open} aria-hidden={!isHidden} {...props}>
      <span onClick={() => setOpen(false)} tabIndex={tabIndex} id="navAboutMe">
        About me
      </span>
      <span onClick={() => setOpen(false)} tabIndex={tabIndex} id="navProjects">
        Projects
        </span>
      <span onClick={() => setOpen(false)} tabIndex={tabIndex} id="navContact">
        Contact
      </span>
    </StyledMenuPage>
  )
}

MenuPage.propTypes = {
  open: bool.isRequired,
}

export default MenuPage;