import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { mobile, tablet } from '../../utils/media';

const FooterLink = styled.a`
	text-decoration: none;
	color: white;
	font-size: 24px;
	float: right;
	padding: 40px 20px;

	${mobile`
		padding: 40px 20px 20px 20px;
	`}
`;

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	${tablet`
		margin-top: 30px;
	`}
	
`;

const FooterLinkWrapper = () => (
	<LinksWrapper>
		<FooterLink href="https://www.instagram.com/atram_reigzi/?hl=pl" alt="instagram" target="_blank" >
			<FaInstagram />
		</FooterLink>
		<FooterLink href="https://www.facebook.com/marta.mizgier" alt="facebook" target="_blank" >
			<FaFacebookF />
		</FooterLink>
		<FooterLink href="https://www.linkedin.com/in/marta-mizgier-961a11166" alt="linkedin" target="_blank" >
			<FaLinkedinIn />
		</FooterLink>
		<FooterLink href="mailto:mizgier.m@gmail.com" alt="my address mail" target="_blank" >
			<FaEnvelope />
		</FooterLink>
	</LinksWrapper>
)

export default FooterLinkWrapper;