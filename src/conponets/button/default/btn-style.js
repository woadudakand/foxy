import styled from 'styled-components';

export const Button = styled.button `   
    margin: 0;
    padding: 10px 50px;
    border: none;
    background: ${props=> props.bg};
    color: ${props=> props.tColor};
    cursor: pointer;
    font-size: 14px;
    border-radius: 22px;
    &:hover {
        background: ${props=> props.hover};
        color: ${props=> props.hColor};
    }
`;