import React from 'react';
import Layout from '../layout/Layout';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectWrapper from '../components/Projects/ProjectWrapper';
import FooterWrapper from '../components/Footer/FooterWrapper';
import BgImage from '../components/BgImage/BgImage';
import MainHeader from '../components/Header/MainHeader';
import styled from 'styled-components';
import { mobile, tablet } from '../utils/media';

const ButtonDiscover = styled.a`
    border: 1px solid ${({ theme }) => theme.primaryWhite};
    display: inline-block;
    padding: 13px 18px 10px 18px;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryWhite};
    text-transform: uppercase;
    position: center;
    letter-spacing: 2px;
    
    &:hover {
        color: ${({ theme }) => theme.primaryNavy};
        background-color: ${({ theme }) => theme.primaryWhite};
        transition: opacity 1s 1.5s ease, background .7s, color .7s;
    }

    ${mobile`
        font-size: 12px;
    `}

    ${tablet`
        font-size: 16px;    
    `}
`;

const IndexPage = ({ children, data }) =>  (
	<Layout>
		<BgImage      
      		title="binoculars"
      		fluid={data.binoculars.childImageSharp.fluid}>
			<div>
				<MainHeader>
					Junior Web Developer
				</MainHeader>
				<div>
					<ButtonDiscover id="btnDiscover">
						Discover
					</ButtonDiscover>
				</div>
			</div>
    	</BgImage>
		<AboutMe>
			{children}
		</AboutMe>
		<ProjectWrapper>
			{children}
		</ProjectWrapper>
		<FooterWrapper>
			{children}
		</FooterWrapper>
	</Layout>
);

export const query = graphql`
query {
	binoculars: file(relativePath: { eq: "hightbinoculars.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 10000) {
				...GatsbyImageSharpFluid
			}
		}
	}
}`;

export default IndexPage;