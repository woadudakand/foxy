import React from 'react';

import { Wraper, H4 } from './styled';
import { Progress, Row, Col } from 'antd';

const ProgressCom = (props) => {
    return (
        <Row>
            <Col md={10}>
                <Wraper>                        
                    <H4>Working Progress  -  {props.percent}%</H4>                    
                </Wraper>
            </Col>
            <Col md={14}>
                <Wraper>
                    <Progress percent={props.percent} showInfo={false} strokeColor={props.color} />
                </Wraper>
            </Col>
        </Row>
    );
}

export default ProgressCom;
