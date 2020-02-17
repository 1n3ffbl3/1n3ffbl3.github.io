import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import MainHeader from '../Header/MainHeader';
import { mobile, tablet } from '../../utils/media';
import { useOnClickOutside } from '../../hooks/hooks';
import Burger from '../Navigation/Burger/Burger';
import MenuPage from '../Navigation/MenuPage/MenuPage';


const HeroImageFrame = styled.div`
    padding: 70px 26px 26px;
    background-color: ${({ theme }) => theme.primaryWhite};
`;

const HeroBackgroundImageWrapper = styled.div`
	padding: 50px 26px 26px;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.primaryNavy} no-repeat 10% 20%;
    background-size: cover;
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
    text-align: center;

    ${mobile`
        height: 50vh;
    `}

    ${tablet`
        height: 70vh;
    `}
`;

const ButtonDiscover = styled.a`
    border: 1px solid ${({ theme }) => theme.primaryWhite};
    display: inline-block;
    padding: 13px 18px 10px 18px;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryWhite};
    text-transform: uppercase;
    position: center;
    letter-spacing: 2px;

    ${mobile`
        font-size: 12px;
    `}

    ${tablet`
        font-size: 16px;    
    `}
`;

const HeroImage = () => {
    const [open, setOpen] = useState(false);
	const node = useRef();

    useOnClickOutside(node, () => setOpen(false));
    
    return (
        <HeroImageFrame>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <MenuPage open={open} setOpen={setOpen} />
            </div>
            <HeroBackgroundImageWrapper>
                <MainHeader>
                    Junior JS <br />
                    Developer
                </MainHeader>
                <div>
                    <ButtonDiscover>
                        Discover
                    </ButtonDiscover>
                </div>
            </HeroBackgroundImageWrapper>
        </HeroImageFrame>
    );
}

export default HeroImage;