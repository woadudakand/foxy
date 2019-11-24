import Styled from 'styled-components';

export const Google = Styled.div `
    height: 463px;
    background: #df4b38;    
    padding-right: 40px;
    width: 100%;
    position: relative;
    z-index: 0;
    color: #ffffff;
`;

export const Image = Styled.img `
    position: absolute;
    width: 50%;
    right: -20px;
    top: 30px;
    z-index: 1;
`;

export const ChildWrap = Styled.div `
    position: absolute;    
    left: 40px;
    bottom: 40px;
    z-index: 1;    
`;

export const H3 = Styled.h3 `
    color: #fff;
    display: flex;
    align-items: center;
`;

export const Span = Styled.span `
    padding-left: 10px;  
`;

export const P = Styled.p `
    font-size: 16px;
    margin: 25px 0px 15px 0px;
`;