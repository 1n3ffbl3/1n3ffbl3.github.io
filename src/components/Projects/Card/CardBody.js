import styled from 'styled-components';

const CardBody = styled.div`
  	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.primaryWhite};
`;


export default CardBody;