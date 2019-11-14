import Styled from 'styled-components';

export const ParentWraper = Styled.div `
    width : 100%;
    height : 100px;
    background : #fff;
    display : flex; 
    align-items : center;
    padding: 20px;
    box-shadow: 0px 2px 7px -5px;
`;

export const ChildWraper = Styled.div `    
    padding-left: 15px;    
`;

export const P = Styled.p `    
    margin : 0;
    font-size: 16px;
    font-weight: light;
`;

export const Small = Styled.small `    
    margin : 0;
    font-size: 13px;
    font-weight: light;
`;