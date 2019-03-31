import React from 'react';
import LogoHeader from '../components/Header/LogoHeader';
import MainHeader from '../components/Header/MainHeader';
import Navigation from '../components/Navigation/Navigation';
import Menu from '../components/Menu/Menu';
import Layout from '../layout/Layout';


const IndexPage = () => (
	<Layout>
		<MainHeader>Junior</MainHeader>
		<MainHeader>Full Stack Developer</MainHeader>
		<Menu>
			<LogoHeader>1n3ffbl3</LogoHeader>
			<Navigation />
		</Menu>
	</Layout>
)

export default IndexPage
