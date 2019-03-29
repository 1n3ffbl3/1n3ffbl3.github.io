import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
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
	flex-direcrtion: column;
	justify-content: center;
	padding: 20vh;
	width: 100%;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	
`;

const IndexPage = () => (
	<>
		<GlobalStyle />
		<StyledWrapper>
			<Header>1n3ffbl3</Header>
			<Navigation />
		</StyledWrapper>
	</>
)

export default IndexPage
