import React from 'react';
import { Row, Col } from 'antd';
import Intro from './intro';
import Clock from './clock';
import Comment from './comment';
import Progress from './progress';

const Work = (props) => {
    return (
        <Row gutter={15}>
            <Col md={8}>
                <Intro
                    src={props.src}
                />
            </Col>
            <Col md={4}>
                <Clock />
            </Col>
            <Col md={4}>
               <Comment />
            </Col>
            <Col md={8}>
               <Progress 
                 percent={props.percent}
                 color={props.color}
               />
            </Col>
        </Row>
    );
}

export default Work;
