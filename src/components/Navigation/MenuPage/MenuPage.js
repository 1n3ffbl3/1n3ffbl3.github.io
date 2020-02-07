import React from 'react';
import { bool } from 'prop-types';
import { StyledMenuPage } from './MenuPage.styled';

const MenuPage = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenuPage open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex} id="navAboutMe">
        About me
      </a>
      <a href="/" tabIndex={tabIndex}>
        Projects
        </a>
      <a href="/" tabIndex={tabIndex}>
        Contact
        </a>
    </StyledMenuPage>
  )
}

MenuPage.propTypes = {
  open: bool.isRequired,
}

export default MenuPage;