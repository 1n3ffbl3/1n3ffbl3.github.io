import React from 'react';
import styled from 'styled-components';
import pictureMe from '../../images/pictureMe.jpg';


const AboutMeWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 40px 60px 20px 60px;
	width: 100%;
	height: 50vh;
	background-color: white;
	background-size: cover;
	background-repeat: no-repeat;
`;

const ImageWrapper = styled.div`
	width: 50%;
	padding: 20px 10px 20px 10px;
`;

const Image = styled.img`
	max-width: 100%;
	// height: auto;
	border-radius: 50%;
	// padding-top: 20px; 
    // padding: 20px;
	content: url(${pictureMe});
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const H4 = styled.h4`
    background: transparent;
    color: #000;
    text-align: center;
    margin-top: 70px;
    margin-bottom:20px;
    padding: 40px;
    padding-top: 10px;
    font-family: 'Lora', 'Arial Black', serif;
    font-weight: normal;
    text-align: center; 
`;

const AboutMeText = styled.p`
  	background: transparent;
    color: #000;
    text-align: center;
    margin-bottom: 70px;
    padding: 40px;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 10px;
    font-family: 'Lora', 'Arial Black', serif;
    font-weight: normal;
    text-align: center;
`;

const AboutMe = () => (
	<AboutMeWrapper>
		<ImageWrapper>
			<Image />
		</ImageWrapper>
		<TextWrapper>
			<H4>About me</H4>
			<AboutMeText>My name is Marta. Nearly a year ago, I finished Elewa Academy
							Full Stack Web Development bootcamp.
							Since then, I have successfully finished my first internship and afterwards continued with
							first Junior Full Stack JavaScript developer job.
							My goal, from the very beginning, is to become an awesome Front End developer. Every day I am
							continuously improving my knowledge of Front End
							technologies, to become the best in the market. At previous company I was working with Vue.js,
							also thanks to previous experience with React.js,
							I am looking for a new challenge as a Junior Full Stack JavaScript Developer.
		</AboutMeText>
		</TextWrapper>
	</AboutMeWrapper>
);

export default AboutMe;