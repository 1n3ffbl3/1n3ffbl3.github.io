import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.ul`
	padding: 0;
	list-style: none;
	font-family: 'Montserrat';
	color: white;
	font-weight: 700;
	display: flex;
`;

const NavigationItem = styled.li`
	margin-right: 15px;
	position: relative;
`;


const Navigation = () => (
	<NavigationWrapper>
		<NavigationItem>ABOUT ME</NavigationItem>
		<NavigationItem>PROJECTS</NavigationItem>
		<NavigationItem>CONTACT</NavigationItem>
	</NavigationWrapper>
);

export default Navigation;