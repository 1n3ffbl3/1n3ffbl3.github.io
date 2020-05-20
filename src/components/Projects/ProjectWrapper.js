import React from 'react';
import styled from 'styled-components';
import girlWithPearl from '../../images/girlWithPearl.jpg';
import bluePhone from '../../images/bluePhone.jpg';
import rabbitTime from '../../images/rabbitTime.jpg';
import lemon from '../../images/lemon.jpg';
import poodle from '../../images/poodleEars.jpg';
import map from '../../images/map.jpg';
import CardBody from './Card/CardBody';
import CardTitle from './Card/CardTitle';
import CardText from './Card/CardText';
import CardLink from './Card/CardLink';
import CardImage from './Card/CardImage';
import { mobile, tablet } from '../../utils/media';

const ProjectsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 40px 60px 20px 60px;
	flex-grow: 1;
	box-sizing: border-box;
    place-content: center space-evenly;
	align-items: center;
	background: ${({ theme }) => theme.primaryGrey};
	background-size: cover;
	z-index: 5;
	position: relative;
	
	${mobile`
		padding: unset;
	`}

	${tablet`
		padding: unset;
	`}
`;

const CardWrapper = styled.div`
	padding: 20px;
	font-weight: lighter;
    width: 20rem; 
	height: 35em;
	display: flex;
	flex-direction: column;
	margin: 50px;

	${mobile`
		width: 100%;
		margin: unset;
		padding: 20px;
	`}

	${tablet`
		margin-bottom: 10px;
		padding: unset;
		position: relative;
		width: 35%;
		float: right;
		flex-grow: 1;
	`}
`;

const H4 = styled.h4`
	background-color: ${({ theme }) => theme.primaryWhite};
    color: ${({ theme }) => theme.primaryBlack};
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 40px;
    padding-top: 60px;
   	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	z-index: 5;
	position: relative;

	${mobile`
		margin-top: unset;
		padding-top: unset;
	`}
`;

const CardLinkWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export default class ProjectWrapper extends React.Component {
	state = {
		projects: [
			{
				image: poodle,
				title: "Chat4people",
				text: "Custom application to chat with people. Made with love and React.js, Sail.js and PostgresDb.",
				codeLink: "https://github.com/1n3ffbl3/chat4people",
			},
			{
				image: map,
				title: "List of countries",
				text: "List of countries application enumerates all countries and EU countries. It also allows yyou to search for the country by its name.",
				codeLink: "https://github.com/1n3ffbl3/List-Of-Countries-App",
			},
			{
				image: lemon,
				title: "Groceries application",
				text: "App which allows you to create a grocery list.",
				codeLink: "https://github.com/1n3ffbl3/Groceries-App",
				demoLink: "https://groceries-app.mizgierm.now.sh/"
			},
			{
				image: bluePhone,
				title: "Phone Book application",
				text: "Created with React.js and Node.js using PostgresDb. This is an example of a phone book.",
				codeLink: "https://github.com/1n3ffbl3/Phone-Book-App",
				demoLink: "https://1n3ffbl3.github.io/Phone-Book-App/"
			},
			{
				image: rabbitTime,
				title: "Save time list application",
				text: "This React application helps you to organize things. It allows you to create three lists : a recipe list, a check-out list and things to see during your life.",
				codeLink: "https://github.com/1n3ffbl3/Save-Time-List",
				demoLink: "https://1n3ffbl3.github.io/Save-Time-List/"
			},
			{
				image: girlWithPearl,
				title: "Tribute Page",
				text: "Tribute page about my favourite writer Tracy Chevalier.",
				codeLink: "https://github.com/1n3ffbl3/tribute",
				demoLink: "https://1n3ffbl3.github.io/tribute"
			},
		]
	}

	render() {
		return (
			<>
				<H4 id="projects">Check out my projects</H4>
				<ProjectsWrapper className="content">
					{
						this.state.projects.map((project, index) => (

							<CardWrapper id={"project" + index} key={index}>
								<CardImage url={project.image}>
								</CardImage>
								<CardBody>
									<CardTitle>{project.title}</CardTitle>
									<CardText>{project.text}</CardText>
									<CardLinkWrapper>
										<CardLink href={project.codeLink} target="_blank">Code</CardLink>
										{project.demoLink && (
											<CardLink href={project.demoLink} target="_blank">Demo</CardLink>
										)}										
									</CardLinkWrapper>
								</CardBody>
							</CardWrapper>
						))
					}
				</ProjectsWrapper>
			</>
		)
	}
};