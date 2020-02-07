import styled from 'styled-components';

const MainHeader = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 85px;
    letter-spacing: 3px;
	text-align: center;
	position: center;
	padding: 0 0 20px;
	color: ${({ theme }) => theme.primaryHeather};
	font-weight: 400;
`;

export default MainHeader;