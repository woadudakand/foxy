import styled from 'styled-components';

export const Wraper = styled.div `
    padding-left: 15px;
    padding-top: 12px;
    display: flex;
    line-height: 100%;
    align-items: center;
    cursor: pointer;
`;

export const UserInfo = styled.div `
    padding-left: 15px;    
`;

export const MessageInfo = styled.div `
    padding-right: 15px;    
`;

export const Span = styled.span `
    font-size: 15px; 
`;

export const AlertWraper = styled.div `
    display: flex;
    float: right;
    padding-right: 25px;
    align-items: center;
    height: 60px;
`;

export const Hr = styled.div `
    height : 1px;
    background : #ddd;
`;

export const Div = styled.div `
    li.ant-menu-item{
        padding: 0 !important;
    }
    .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title{
        padding: 0px 33px !important;
    }
    a{
        padding: 0px 32px;
    }
    a.active{
        background: #5ba2e4 !important;
    }
`;