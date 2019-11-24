import Styled from 'styled-components';

export const List = Styled.div `
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    color: #000;
    padding: 0px 15px;
    &:hover {
        color: #fff;
        background: #5ba2e4;
    }
    &:hover h3 {
        color: #fff;
    }
    i.anticon-star {
        padding: 0px 15px;
        font-size: 18px
    }
    .ant-checkbox-wrapper {
        transform: scale(1.3);
    }
    div {
        padding-left: 15px;
    }
    p{
        margin: 0;
    }
`;