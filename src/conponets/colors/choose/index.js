import React from 'react';
import { Row, Col } from 'antd';
import { Div } from './style';

const Choose = (props) => {

    const { title, color, size } = props
    return (
        <Row>
            <Col md={12}>
                <h4>{title}</h4>
                <p>{color}</p>
            </Col>
            <Col md={12}>               
                <Div color={color}>{size}</Div>
            </Col>
        </Row>
    );
}

export default Choose;
