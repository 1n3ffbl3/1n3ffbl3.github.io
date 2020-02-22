import React from 'react';
import styled from 'styled-components';
import girlWithPearl from '../../images/girlPearl.jpg';
import spacer from '../../images/nightBigSky.jpg';
import tictactoe from '../../images/tictactoe.jpg';
import bookInception from '../../images/bookInception2.jpg';
import rabbitTime from '../../images/rabbitTime2.jpg';
import lemon from '../../images/lemon.jpg';
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
    background: transparent;
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
`;

const CardLinkWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export default class ProjectWrapper extends React.Component {
	state = {
		projects: [
			{
				image: girlWithPearl,
				title: "Tribute Page",
				text: "Tribute page about my favourite writer Tracy Chevalier.",
				codeLink: "https://github.com/1n3ffbl3/tribute",
				demoLink: "https://1n3ffbl3.github.io/tribute"
			},
			{
				image: lemon,
				title: "Groceries application",
				text: "App which allows you to create a list of items to buy.",
				codeLink: "https://github.com/1n3ffbl3/Groceries-App",
				demoLink: "https://groceries-app.mizgierm.now.sh/"
			},
			{
				image: bookInception,
				title: "Phone Book application",
				text: "Created using React.js and Node.js with use of PostgresDb. This is example of Phone book dictionary.",
				codeLink: "https://github.com/1n3ffbl3/Phone-Book-App",
				demoLink: "https://1n3ffbl3.github.io/Phone-Book-App/"
			},
			{
				image: spacer,
				title: "Spacer application",
				text: "Application written in Vue.js. Thanks to this application you can search for a NASA photos by typing a space related expression.",
				codeLink: "https://github.com/1n3ffbl3/spacer-hellomarta",
				demoLink: "https://1n3ffbl3.github.io/spacer-hellomarta/"
			},
			{
				image: rabbitTime,
				title: "Save time list application",
				text: "This React application helps you to organize things. It allows you to create three lists : list of recipes, check-out list and things to see during lifetime.",
				codeLink: "https://github.com/1n3ffbl3/Save-Time-List",
				demoLink: "https://1n3ffbl3.github.io/Save-Time-List/"
			},
			{
				image: tictactoe,
				title: "Tictactoe game",
				text: "Implementation in JavaScript.",
				codeLink: "https://github.com/1n3ffbl3/studying-with-specs",
				demoLink: "https://1n3ffbl3.github.io/studying-with-specs/"
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
										<CardLink href={project.demoLink} target="_blank">Demo</CardLink>
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