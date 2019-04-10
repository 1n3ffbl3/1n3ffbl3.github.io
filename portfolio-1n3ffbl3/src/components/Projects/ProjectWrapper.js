import React from 'react';
import styled from 'styled-components';
import Card from './Card/Card';


const ProjectsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 40px 60px 20px 60px;
`;

const DivClass = styled.div`
	flex: 1 0 21%; 
	margin: 50px;
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
		<DivClass >
			<Card>{children}</Card>
		</DivClass>
		<DivClass >
			<Card>{children}</Card>
		</DivClass>
	</ProjectsWrapper>
);

export default ProjectWrapper;