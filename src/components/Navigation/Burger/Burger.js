import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

/**
 * Author of this code is GitHub user @maximakymenko
 * Repository: https://github.com/maximakymenko/react-burger-menu-article-app
 */
const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;