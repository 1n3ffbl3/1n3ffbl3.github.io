import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.ul`
	padding: 0;
	list-style: none;
	font-family: 'Montserrat';
	color: white;
	font-weight: 500;
	display: flex;
	flex-shrink: 2;
	flex-grow: 1;
`;

const NavigationItem = styled.li`
	margin-right: 100px;
	position: relative;
	justify-content: space-around;
	letter-spacing: 2px;
	text-transform: uppercase;
`;


const Navigation = () => (
	<NavigationWrapper>
		<NavigationItem>About me</NavigationItem>
		<NavigationItem>Projects</NavigationItem>
		<NavigationItem>Contact</NavigationItem>
	</NavigationWrapper>
);

export default Navigation;