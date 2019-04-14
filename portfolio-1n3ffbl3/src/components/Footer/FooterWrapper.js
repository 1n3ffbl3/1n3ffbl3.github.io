import React from 'react';
import styled from 'styled-components';
import FooterLinkWrapper from './FooterLink';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const FooterImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 30%;
	background-color: #2c3e50;
	background-size: cover;
	background-repeat: no-repeat;
`;

const H6 = styled.h6`
	font-family: sans serif;
	font-size: 13px;
    letter-spacing: 2px;
	color: white;
	text-align: center;
	position: relative;
`;


const FooterWrapper = () => (
	<FooterImageWrapper id="contact">
		<FooterLinkWrapper />
		<H6>Copyright © 2019</H6>
	</ FooterImageWrapper >
);

export default FooterWrapper;