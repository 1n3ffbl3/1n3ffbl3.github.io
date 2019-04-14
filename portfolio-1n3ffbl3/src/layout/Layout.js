import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';


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
	padding: 0;
	width: 100%;
	height: 100vh;
	background-color: black;
	background-size: cover;
`;

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<StyledWrapper>
				{children}
			</StyledWrapper>
		</>
	</ThemeProvider>
)

export default Layout;