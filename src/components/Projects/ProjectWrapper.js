import React from 'react';
import styled from 'styled-components';
import girlWithPearl from '../../images/girlWithPearl.jpg';
import spacer from '../../images/spacerImage.jpg';
import peopleHeart from '../../images/people_heart_shadow.jpg';
import tictactoe from '../../images/tictactoe.jpg';
import codewars from '../../images/codewars5.jpg';
import computer from '../../images/computer.jpg';
import phoneBook from '../../images/phone-book.jpg';
import saveTimeList from '../../images/saveTimeList.jpg';
import CardBody from './Card/CardBody';
import CardTitle from './Card/CardTitle';
import CardText from './Card/CardText';
import CardLink from './Card/CardLink';
import CardImage from './Card/CardImage';

const ProjectsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 40px 60px 20px 60px;
	flex-grow: 1;
	box-sizing: border-box;
    place-content: center space-evenly;
    align-items: center;
`;

const CardWrapper = styled.div`
	padding: 20px;
	font-weight: lighter;
	box-shadow: 0 20px 40px -5px rgba(0,0,0,.3);
    width: 20rem; 
	height: 35em;
	display: flex;
	flex-direction: column;
	margin: 50px;
`;

const H4 = styled.h4`
    background: transparent;
    color: #000;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 40px;
    padding-top: 60px;
   	font-family: 'Montserrat', sans-serif;
	font-weight: 500px;
	font-size: 22px;
    text-align: center; 
`;

const CardLinkWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export default class ProjectWrapper extends React.Component {
	state = {
		projects: [
			{
				image: peopleHeart,
				title: "Application People 4People",
				text: "Application which is designed to provide an easier way of communication between people and organizations who want to help others.",
				codeLink: "https://github.com/Mariana88/MandM-FinalProject",
				demoLink: "https://1n3ffbl3.github.io/MyFirstApplication/"
			},
			{
				image: girlWithPearl,
				title: "Tribute Page",
				text: "Tribute page about my favourite writer Tracy Chevalier.",
				codeLink: "https://github.com/1n3ffbl3/tribute",
				demoLink: "https://1n3ffbl3.github.io/tribute"
			},
			{
				image: tictactoe,
				title: "Tictactoe game",
				text: "Implementation in JavaScript.",
				codeLink: "https://github.com/1n3ffbl3/studying-with-specs",
				demoLink: "https://1n3ffbl3.github.io/studying-with-specs/"
			},
			{
				image: codewars,
				title: "Codewars Repository",
				text: "Set of solutions for codewars challenges.",
				codeLink: "https://github.com/1n3ffbl3/Codewars_gallery",
				demoLink: "https://1n3ffbl3.github.io/Codewars_gallery/"
			},
			{
				image: computer,
				title: "The Programmer's Oath",
				text: "Created in github pages.",
				codeLink: "https://github.com/1n3ffbl3/programmers-oath-template",
				demoLink: "https://1n3ffbl3.github.io/programmers-oath-template/"
			},
			{
				image: phoneBook,
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
				image: saveTimeList,
				title: "Save time list application",
				text: "This React application helps you to organize things. It allows you to create three lists : list of recipes, check-out list and things to see during lifetime.",
				codeLink: "https://github.com/1n3ffbl3/Save-Time-List",
				demoLink: "https://1n3ffbl3.github.io/Save-Time-List/"
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