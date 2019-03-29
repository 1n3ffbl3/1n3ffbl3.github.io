import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header/Header';
import MainHeader from '../components/Header/MainHeader';
import Navigation from '../components/Navigation/Navigation';
import NavigationBorder from '../components/Navigation/NavigationBorder';
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
	display: flex;
	flex-flow: row wrap;
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
			<MainHeader>Full Stack Developer</MainHeader>
			<NavigationBorder>
				<Header>1n3ffbl3</Header>
				<Navigation />
			</NavigationBorder>
		</StyledWrapper>
	</>
)

export default IndexPage
