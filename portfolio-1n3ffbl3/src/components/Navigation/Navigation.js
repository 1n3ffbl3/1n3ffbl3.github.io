import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.ul`
	padding: 0;
	list-style: none;
	font-family: 'Montserrat';
	color: white;
	font-weight: 500;
	flex: 1 1 80%;
	max-width: 80%;
	display: flex;
	flex-direction: row;
	align-items: center;
	place-content: center space-evenly;
`;

const NavigationItem = styled.li`
	letter-spacing: 2px;
	text-transform: uppercase;
`;


const Navigation = () => (
	<NavigationWrapper>
		<NavigationItem id="niAboutMe">About me</NavigationItem>
		<NavigationItem>Projects</NavigationItem>
		<NavigationItem>Contact</NavigationItem>
	</NavigationWrapper>
);

export default Navigation;