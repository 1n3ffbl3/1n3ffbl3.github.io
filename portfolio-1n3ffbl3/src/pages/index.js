import React from 'react';
import Layout from '../layout/Layout';
import MenuWrapper from '../components/Menu/MenuWrapper';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';

const IndexPage = ({ children }) => (
	<Layout>
		<MenuWrapper>
			{children}
		</MenuWrapper>
		<AboutMe>
			{children}
		</AboutMe>
		<Projects>
			{children}
		</Projects>
	</Layout>
);

export default IndexPage;
