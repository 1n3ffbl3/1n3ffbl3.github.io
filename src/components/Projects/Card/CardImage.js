import styled from 'styled-components';
import React from 'react';

const ImageWrapper = styled.div`
	width: 100%;
	height: 17rem;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const CardImage = ({ url }) => <>
	<ImageWrapper>
		<Image src={url}></Image>
	</ImageWrapper>
</>

export default CardImage;