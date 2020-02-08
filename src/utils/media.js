import { css } from 'styled-components';
import { ScreenSize } from './enums';

const maxScreenWidth = Object.keys(ScreenSize).reduce((accumulator, currValue) => {
    accumulator[currValue] = (...args) => css`
        @media (max-width: ${ScreenSize[currValue]}) {
            ${css(...args)}
        }
    `;
    return accumulator;
}, {});

export default maxScreenWidth;