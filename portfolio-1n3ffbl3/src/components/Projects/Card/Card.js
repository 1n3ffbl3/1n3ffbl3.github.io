import React from 'react';
import styled from 'styled-components';
import CardBody from './CardBody';
import CardImage from './CardImage';
import CardLink from './CardLink';
import CardText from './CardText';
import CardTitle from './CardTitle';
import Img from 'gatsby-image';
import girlWithPearl from '../../../images/girlWithPearl.jpg';
import spacer from '../../../images/heroimage2.jpg';

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


export default class Card extends React.Component {
	state = {
		images: [
			girlWithPearl,
			spacer
		],
	}

	render() {

		return (
			<CardWrapper>
				<ImageWrapper>
					<Image
					/>
				</ImageWrapper>
				{/* <CardImage></CardImage> */}
				<CardBody>
					<CardTitle>First project</CardTitle>
					<CardText></CardText>
					<CardLink></CardLink>
				</CardBody>
			</CardWrapper>
		)
	}
}