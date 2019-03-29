import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LogoHeader from '../components/Header/LogoHeader';
import MainHeader from '../components/Header/MainHeader';
import Navigation from '../components/Navigation/Navigation';
import Menu from '../components/Menu/Menu';
import backgroundImage from '../images/backgroundImage.jpg';

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

const StyledWrapper = styled.div`
	padding: 40px 60px 20px 60px;
	width: 100%;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
`;

const IndexPage = () => (
	<>
		<GlobalStyle />
		<StyledWrapper>
			<MainHeader>Junior</MainHeader>
			<MainHeader>Full Stack Developer</MainHeader>
			<Menu>
				<LogoHeader>1n3ffbl3</LogoHeader>
				<Navigation />
			</Menu>
		</StyledWrapper>
	</>
)

export default IndexPage
