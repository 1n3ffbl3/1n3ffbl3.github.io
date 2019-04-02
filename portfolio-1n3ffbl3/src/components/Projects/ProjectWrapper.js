import React from 'react';
import styled from 'styled-components';
import Card from './Card/CardWrapper';


const ProjectsWrapper = styled.div`
	padding: 40px 60px 20px 60px;
	width: 100%;
	height: 100vh;
	background-color: blue;
	background-size: cover;
	background-repeat: no-repeat;
`;
const ProjectWrapper = ({ children }) => (
	<ProjectsWrapper>
		Projects
	<Card>{children}</Card>
	</ProjectsWrapper>
);

export default ProjectWrapper;