import Styled from 'styled-components';

export const Box = Styled.div `
    width: 180px;
    height: 180px;
    background : ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;
export const P = Styled.p `
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 16px;
`;