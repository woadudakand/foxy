import React from 'react';
import { Row, Col } from 'antd';
import Nav from './nav';
import CardFrame from '../../card/cardFrame';
import { Wraper } from './style';

const LayoutMail = (props) => {
    return (
        <Row gutter={15}>
            <Col md={20}>
                <Wraper>
                    <CardFrame title='Mailbox' >                    
                            {props.children}                    
                    </CardFrame>
                </Wraper>
            </Col>
            <Col md={4}>
                <Nav />
            </Col>                       
        </Row>        
    );
}

export default LayoutMail;
