import React, { Fragment } from 'react';
import UserInfo from './user-info';
import Box from './box';
import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

const ProfileWedget = () => {
    return (
        <Fragment>
            <UserInfo />
            <Row>
                <Col md={12}>
                    <Box text="Working Hours" title="25 Hours" />                
                </Col>
                <Col md={12}>
                    <Box text="Amount Total" title="$ 2,269" />                
                </Col>
                <Col md={12}>
                    <Box text="Overdeu" title="$ 429" />                
                </Col>
                <Col md={12}>
                    <Box text="%Ovarall Work" title="36 %" />                
                </Col>
            </Row>
            <NavLink style={style} to="#">Send Message</NavLink>             
        </Fragment>
    );
}

export default ProfileWedget;

const style = {
    display: 'block', 
    textAlign: 'center', 
    padding: '25px'
}