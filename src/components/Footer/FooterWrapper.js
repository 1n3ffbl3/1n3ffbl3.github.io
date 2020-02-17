import React from 'react';
import styled from 'styled-components';
import FooterLinkWrapper from './FooterLink';
import { mobile, tablet } from '../../utils/media';

const FooterImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 30%;
	background-color: ${({ theme }) => theme.primaryNavy};
	background-size: cover;
	background-repeat: no-repeat;

	${mobile`
		height: 20%;
	`}

	${tablet`
		height: 25%;
	`}

`;

const H5 = styled.h5`
	font-family: 'Monserrat', sans-serif;
	font-weight: normal;
    letter-spacing: 2px;
	color: white;
	text-align: center;
	position: relative;
`;


const FooterWrapper = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterImageWrapper id="contact">
			<FooterLinkWrapper />
			<H5>Copyright &copy; {currentYear}</H5>
		</ FooterImageWrapper>
	);
} 

export default FooterWrapper;