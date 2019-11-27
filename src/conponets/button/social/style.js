import styled from 'styled-components';

export const Button = styled.button `   
    margin: 0;   
    width: 70px;
    height: 70px;
    border: none;
    background: ${props=> props.bg};
    color: ${props=> props.tColor};
    cursor: pointer;
    font-size: 14px;    
    border-radius: 50%;
    position: relative;
    margin-left: 30px;
    &::before {        
        content: '';
        width: 0;
        height: 0;
        background: transparent;
        position: absolute;
        border-left: 20px solid transparent;
        border-top: 13px solid transparent;
        border-right: 20px solid ${props=> props.bg};
        border-bottom: 13px solid transparent;
        left: -50%;
        top: 50%;
        margin-top: -13px;
    }
    &:hover {
        background: ${props=> props.hover};
        color: ${props=> props.hColor};
    }
    &:hover&::before {
        border-right: 20px solid ${props=> props.hover};        
    }
`;

export const Wraper = styled.div `

`;