import styled from 'styled-components';
import { mobile, tablet } from '../../utils/media';

const MainHeader = styled.h1`
	font-family: 'Crimson Pro', serif;
	font-size: 55px;
	line-height: 1.2;
	text-align: center;
	position: center;
	padding: 0 0 5px;
	color: ${({ theme }) => theme.navyBlue};
	font-weight: 800;

	${mobile`
		font-size: 25px;
		text-transform: unset;
	`}

	${tablet`
		font-size: 45px;
	`}
`;

export default MainHeader;