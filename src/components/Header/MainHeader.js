import styled from 'styled-components';
import { mobile, tablet } from '../../utils/media';

const MainHeader = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 85px;
    letter-spacing: 3px;
	text-align: center;
	position: center;
	padding: 0 0 20px;
	color: ${({ theme }) => theme.primaryHeather};
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