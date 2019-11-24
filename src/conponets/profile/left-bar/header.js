import React from 'react';
import { Header } from './styled';
import UserIn from '../../user/info';
import { Row, Col } from 'antd';
import Follow from '../../button/follow';
import Social from '../../social-icon';

const HeaderCon = () => {
    return (
        <Header>
            <Row>
                <Col md={6}>
                    <UserIn />                
                </Col>
                <Col md={12}>
                    <Follow />
                </Col>
                <Col md={6}>
                    <Social />
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderCon;
