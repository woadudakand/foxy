import Styled from 'styled-components';

export const Palette = Styled.div `
    width: 100%;
    height: 50px;
    background: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    color: #fff;
`;