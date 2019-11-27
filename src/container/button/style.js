import Styled from 'styled-components';

export const Div = Styled.div `
    button{
        margin-right: 15px;
    }
`;

export const Section = Styled.section `
    padding: 30px 15px;
    p {
        font-size: 16px;
    }
`;

export const Wraper = Styled.div `
    padding: 30px 0px;
`;

export const Info = Styled.div `
        margin-top: 15px;
        display: flex;
    .box{
        width: 20px;
        height: 20px;
        background: ${props=> props.bg};        
        margin-right: 15px;
        border-radius: 50%;
    }
    p{
        margin: 0;
    }
`;