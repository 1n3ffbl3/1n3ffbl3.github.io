import React from 'react';
import Layout from '../layout/Layout';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectWrapper from '../components/Projects/ProjectWrapper';
import FooterWrapper from '../components/Footer/FooterWrapper';
import HeroImage from '../components/HeroImage/HeroImage';


const IndexPage = ({ children }) =>  (
	<Layout>
		<HeroImage>
			{children}
		</HeroImage>
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
)

export default IndexPage;