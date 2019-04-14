import React from 'react';
import Layout from '../layout/Layout';
import MenuWrapper from '../components/Menu/MenuWrapper';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectWrapper from '../components/Projects/ProjectWrapper';
import FooterWrapper from '../components/Footer/FooterWrapper';


const IndexPage = ({ children }) => (
	<Layout>
		<MenuWrapper>
			{children}
		</MenuWrapper>
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

export default IndexPage;
