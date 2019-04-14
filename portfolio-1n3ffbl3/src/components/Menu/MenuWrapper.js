import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import LogoHeader from '../Header/LogoHeader';
import MainHeader from '../Header/MainHeader';
import HeaderWrapper from '../Header/HeaderWrapper';
import backgroundImage from '../../images/backgroundImage.jpg';
import Navigation from '../Navigation/Navigation';

const BackgroundImageWrapper = styled.div`
	padding: 40px 60px 20px 60px;
	width: 100%;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	color: white;
`;

export default class MenuWrapper extends React.Component {
	render() {
		return (
			<BackgroundImageWrapper>
				<HeaderWrapper>
					<MainHeader>
						Junior Full Stack <br />
						JavaScript Developer
					</MainHeader>
				</HeaderWrapper>
				<Menu id="navbar">
					<LogoHeader>1n3ffbl3</LogoHeader>
					<Navigation />
				</Menu>
			</ BackgroundImageWrapper >
		)
	}
};