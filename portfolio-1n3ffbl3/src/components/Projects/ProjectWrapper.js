import React from 'react';
import styled from 'styled-components';
import girlWithPearl from '../../images/girlWithPearl.jpg';
import spacer from '../../images/heroimage2.jpg';
import peopleHeart from '../../images/people_heart_shadow.jpg';
import tictactoe from '../../images/tictactoe.jpg';
import codewars from '../../images/codewars5.jpg';
import computer from '../../images/computer.jpg';
import phoneBook from '../../images/phone-book.jpg';
import heroImage from '../../images/heroimage2.jpg';
import CardBody from './Card/CardBody';
import CardTitle from './Card/CardTitle';
import CardText from './Card/CardText';
import CardLink from './Card/CardLink';

const ProjectsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 40px 60px 20px 60px;
`;

const DivClass = styled.div`
	flex: 1 0 21%; 
	margin: 50px;
`;

const CardWrapper = styled.div`
	padding: 20px;
	font-weight: lighter;
    box-shadow: 10px 10px 87px -13px rgba(0,0,0,0.75);
    width: 20rem; 
	height: 35em;
	display: flex;
	flex-direction: column;
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 17rem;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	content: url(${girlWithPearl});
`;

export default class ProjectWrapper extends React.Component {
	state = {
		images: [
			girlWithPearl,
			spacer
		],
		projectTitles: [
			"First Title",
			"Second Title",
			"Third Title",
			"Fourth Title",
			"Fifth Title",
			"Sixth Title",
			"Seventh Title",
			"Eighth Title",
		],
		projects: [
			{
				image: peopleHeart,
				title: "Application People 4People",
				text: "Application which is designed to provide an easier way of communication between people and organizations who want to help others."
			},
			{
				image: girlWithPearl,
				title: "Tribute Page",
				text: "Tribute page about my favourite writer Tracy Chevalier."
			},
			{
				image: tictactoe,
				title: "Tictactoe game",
				text: "Implementation in JavaScript."
			},
			{
				image: codewars,
				title: "Codewars Solution Repository",
				text: "Set of solutions for codewars challenges."
			},
			{
				image: computer,
				title: "The Programmer's Oath",
				text: "Created in github pages."
			},
			{
				image: phoneBook,
				title: "Phone Book application",
				text: "Created using React.js and Node.js with use of PostgresDb. This is example of Phone book dictionary."
			},
			{
				image: heroImage,
				title: "Spacer application",
				text: "Application written in Vue.js. Thanks to this application you can search for a NASA photos by typing a space related expression."
			},
		]
	}

	render() {

		return (

			<ProjectsWrapper>
				{
					this.state.projects.map(project => (
						<DivClass>
							<CardWrapper>
								<ImageWrapper>
									<Image/>
								</ImageWrapper>
								<CardBody>
									<CardTitle>{project.title}</CardTitle>
									<CardText>{project.text}</CardText>
									<CardLink></CardLink>
								</CardBody>
							</CardWrapper>
						</DivClass>
					))
				}
			</ProjectsWrapper>
		)
	}
}

// = ({ children }) => (
// 	<ProjectsWrapper>
// 		{/* Projects */}
// 		<DivClass >
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass>
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass>
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass>
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass>
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass>
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass >
// 			<Card>{children}</Card>
// 		</DivClass>
// 		<DivClass >
// 			<Card>{children}</Card>
// 		</DivClass>
// 	</ProjectsWrapper>
// );

