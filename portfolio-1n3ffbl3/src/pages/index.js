import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "gatsby";
import backgroundImage from "../images/background.jpg";

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
	width: 100 %;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	
`;

const IndexPage = () => (
	<>
		<GlobalStyle />
		<StyledWrapper>
			<Link to="/secondpage">Idź do second page</Link>
		</StyledWrapper>
	</>
)

export default IndexPage
