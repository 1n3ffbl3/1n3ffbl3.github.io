import React from 'react';
import styled from 'styled-components';
import Card from './Card/CardWrapper';


const ProjectsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 40px 60px 20px 60px;
	// width: 100%;
	// height: 100vh;
	// background-color: blue;
	// background-size: cover;
	// background-repeat: no-repeat;
`;

const DivClass = styled.div`
	flex: 1 0 21%; 
	margin: 5px;
	// height: 100px;
`;

const ProjectWrapper = ({ children }) => (
	<ProjectsWrapper>
		{/* Projects */}
		<DivClass >
			<Card>{children}</Card>
		</DivClass>
		<DivClass>
			<Card>{children}</Card>
		</DivClass>
		<DivClass>
			<Card>{children}</Card>
		</DivClass>
		<DivClass>
			<Card>{children}</Card>
		</DivClass>
		<DivClass>
			<Card>{children}</Card>
		</DivClass>
		<DivClass>
			<Card>{children}</Card>
		</DivClass>
		{/* <Card>{children}</Card>
		<Card>{children}</Card>
		<Card>{children}</Card> */}
	</ProjectsWrapper>
);

export default ProjectWrapper;