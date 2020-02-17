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

const mobile = (...args) => {
    return css`
        @media only screen and (max-width:${ScreenSize.xs}px) {
            ${css(...args)}
        }
    `;
}

const tablet = (...args) => {
    return css`
        @media only screen and (min-width: ${ScreenSize.sm}px) and (max-width: ${ScreenSize.md}px) {
            ${css(...args)}
        }
    `;
}

const desktop = (...args) => {
    return css`
        @media only screen and (min-width: '993px') {
            ${css(...args)}
        }
    `;
}

export {
    mobile,
    tablet,
    desktop
}