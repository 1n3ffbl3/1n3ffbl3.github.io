import React from 'react';
import styled from 'styled-components';
import CardBody from './CardBody';
import CardImage from './CardImage';
import CardLink from './CardLink';
import CardText from './CardText';
import CardTitle from './CardTitle';

const CardWrapper = styled.div`
	padding: 50px;
	font-weight: lighter;
    box-shadow: 10px 10px 87px -13px rgba(0,0,0,0.75);
    width: 20rem; 
	height: 35em;
	display: flex;
	flex-direction: row;
`;


const Card = () => (
	<CardWrapper>
		<CardImage></CardImage>
		<CardBody>
			<CardTitle>First project</CardTitle>
			<CardText></CardText>
			<CardLink></CardLink>
		</CardBody>
	</CardWrapper>
);

export default Card;