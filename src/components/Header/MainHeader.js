import styled from 'styled-components';
import { mobile, tablet } from '../../utils/media';

const MainHeader = styled.h1`
	font-family: 'Crimson Pro', serif;
	font-size: 48px;
	line-height: 1.2;
	text-align: center;
	position: center;
	padding: 0 0 5px;
	color: ${({ theme }) => theme.primaryWhite};
	font-weight: 400;

	${mobile`
		font-size: 30px;
		text-transform: unset;
	`}

	${tablet`
		font-size: 60px;
	`}
`;

export default MainHeader;