import Styled from 'styled-components';

export const Wraper = Styled.div `
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;  
`;

export const WraperChild = Styled.div `
    display: flex;
    height: 60px;
    align-items: center;    
`;

export const Image = Styled.img `
    width: 50px !important;
    height: 50px !important;
    border-radius : 50% !important;
    margin: 0px 15px;
`;

export const Button = Styled.button `
    background: #547df9;
    border: none;
    padding: 3px 20px;
    border-radius: 5px;
    color: #fff;
    padding-bottom: 8px;
    cursor: pointer;
    ${props => props.type === 'Admin' && `{
        background: #a4d882;
    }`}
`;