import React, { lazy, Suspense } from 'react';
import { Col, Row } from 'antd';

const NotifyBox = lazy(() => import('./box'));

const Notification = () => {
    return (
        <Suspense fallback={<div>Loading ........... </div>}> 
            <Row gutter={15}>
                <Col md={8} >
                    <NotifyBox
                        color = '#a4d882'
                        text1 = '50 user comments'
                        text2 = '3 new comment'
                        icon = 'message'
                    />
                </Col>

                <Col md={8} >
                    <NotifyBox
                        color = '#5ba2e4'
                        text1 = '50 completed project'
                        text2 = '2 new project'
                        icon = 'project'
                    />
                </Col>

                <Col md={8} >
                    <NotifyBox
                        color = '#f6da40'
                        text1 = 'Registered people'
                        text2 = '5 new people'
                        icon = 'user'
                    />
                </Col>

            </Row>          
        </Suspense>
    );
}

export default Notification;
