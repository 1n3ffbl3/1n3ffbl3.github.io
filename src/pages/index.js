import React from 'react';

import Layout from '../layout/Layout';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectWrapper from '../components/Projects/ProjectWrapper';
import FooterWrapper from '../components/Footer/FooterWrapper';
import HeroImg from '../components/HeroImg/HeroImg';
import Spacer from '../components/Spacer/Spacer';

const IndexPage = ({ children }) =>  (
  <Layout>
    <HeroImg/>
	<Spacer/>
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