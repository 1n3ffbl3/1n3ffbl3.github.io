import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import LogoHeader from '../Header/LogoHeader';
import MainHeader from '../Header/MainHeader';
import backgroundImage from '../../assets/images/backgroundImage.jpg';
import Navigation from '../Navigation/Navigation';

const BackgroundImageWrapper = styled.div`
	padding: 40px 60px 20px 60px;
	width: 100%;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
`;

const MenuWrapper = () => (
	<BackgroundImageWrapper>
		<MainHeader>Junior</MainHeader>
		<MainHeader>Full Stack Developer</MainHeader>
		<Menu>
			<LogoHeader>1n3ffbl3</LogoHeader>
			<Navigation />
		</Menu>
	</ BackgroundImageWrapper>

);

export default MenuWrapper;