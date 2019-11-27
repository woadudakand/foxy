import React from 'react';
import { Col } from 'antd';
import { Div, H4 } from './style';

const Text = (props) => {
    const {title, color} = props;
    return (        
        <Col md={8}>
            <Div color={color}></Div>
            <H4>{title}</H4>
            <p>{color}</p>
        </Col>        
    );
}

export default Text;
