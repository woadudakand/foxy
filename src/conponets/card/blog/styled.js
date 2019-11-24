import Styled from 'styled-components';

export const Figure = Styled.figure `
    box-shadow: 0px 0px 2px 0px;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 15px;
`;

export const Image = Styled.img `
    width: 100%;
`;

export const Figcaption = Styled.figcaption `
    padding: 25px 25px;
`;

export const P = Styled.p `
    font-size: 16px;
    line-height: 150%;
`;

export const H2 = Styled.h2 `
    color: #000;
`;

export const Separator = Styled.span `
    display: block;
    width: 70px;
    height: 2px;
    background: #000;
    margin: 25px 0px;
`;

export const Button = Styled.button `
    background: #547df9;
    border: none;
    padding: 8px 25px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
`;