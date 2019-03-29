import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "gatsby";

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
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const IndexPage = () => (
	<>
		<GlobalStyle />
		<StyledWrapper>
			<h1>Hello world!</h1>
			<Link to="/secondpage">Idź do poco loco</Link>
		</StyledWrapper>
	</>
)

export default IndexPage
