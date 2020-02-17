import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../utils/media';
import arrow_right from '../../images/arrow_right.png';

const AboutMeWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 30px 100px 20px;
	width: 100%;
	height: 30vh;
	background-color: white;
	background-size: cover;
	background-repeat: no-repeat;
	justify-content: center;

	${mobile`
		height: 40vh;
		padding: 20px;
		flex-direction: column;
	`}

	${tablet`
		height: 25vh;
		padding: 40px 0;
	`}
`;

const ImageWrapper = styled.div`
	width: 50%;
	padding: 20px 10px 20px 10px;

	${mobile`
		width: 20%;
		padding: 0;
	`}

	${tablet`
		width: 50%;
		padding: 20px 10px 20px 10px;
	`}
`;

const Image = styled.image`
	max-width: 40%;
	content: url(${arrow_right});

	${tablet`
		max-width: 50%;
	`}
`;


const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;

	${mobile`
		width: 100%;
	`}

	${tablet`
		width: 50%;
	`}
`;

const H4 = styled.h4`
    background: transparent;
   	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 12px;
	text-align: left;
	text-transform: uppercase;
	letter-spacing: 2px;
	
	${mobile`
		padding: 0;	
		margin-top: 10px;
		font-size: 12px;
		text-align: left;
	`}

	${tablet`
		padding: 0;
		font-size: 12px;
		text-align: left;
		padding: unset;
	`}
`;

const AboutMeText = styled.p`
  	background: transparent;
	margin-bottom: 70px;
   	font-family: 'Crimson Pro', serif;
	font-weight: normal;
	line-height: 1.6;
	text-align: left;
	font-size: 18px;

	${mobile`
		padding: unset;
		text-align: left;
	`}

	${tablet`
		padding: 0 60px 0 0;
		text-align: left;
	`}
`;

const AboutMe = () => (
	<AboutMeWrapper id="aboutMe">
		<ImageWrapper>
			<Image />
		</ImageWrapper>
		<TextWrapper>
			<H4>About me</H4>
			<AboutMeText> I'm a Junior Web Developer focused on improving knowledge of front-end technologies, to become the best in the market.
		</AboutMeText>
		</TextWrapper>
	</AboutMeWrapper>
);

export default AboutMe;