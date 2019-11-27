import Styled from 'styled-components';

export const Div = Styled.div `
    background: ${props=> props.color};
    height: 50px;
    color: #fff;
    padding: 10px;
`;