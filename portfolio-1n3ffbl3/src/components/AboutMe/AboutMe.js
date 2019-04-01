import React from 'react';
import styled from 'styled-components';
import pictureMe from '../../images/pictureMe.jpg';


const AboutMeWrapper = styled.div`
	padding: 40px 60px 20px 60px;
	width: 100%;
	height: 50vh;
	background-color: white;
	background-size: cover;
	background-repeat: no-repeat;
`;

const Image = styled.img`
 	border-radius: 50%;
    max-width: 50%;
    max-height: 50%;
    padding-top: 20px; 
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
	margin: -70px 0 0 -170px;
	backgroundImage: url(${pictureMe});
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
		<Image></Image>
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
	</AboutMeWrapper>
);

export default AboutMe;