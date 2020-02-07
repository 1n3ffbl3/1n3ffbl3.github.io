import { css } from 'styled-components';
import { ScreenSize } from './enums';

const minScreenWidth = Object.keys(ScreenSize).reduce((accumulator, currValue) => {
    accumulator[currValue] = (...args) => css`
        @media (min-width: ${ScreenSize[currValue]}) {
            ${css(...args)}
        }
    `;
    return accumulator;
}, {});

export default minScreenWidth;