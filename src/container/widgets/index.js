import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import { Section, Margin } from './style';
import ProfileWedget from '../../conponets/widgets/profile';
import GoogleArea from '../../conponets/chart/google-chart/area-chart';
import MAilboxCom from '../../conponets/mailbox/inbox'

import NotifyBox from '../../conponets/notification/box';
import CardFrame from '../../conponets/card/cardFrame';
import LocationChart from '../../conponets/chart/google-chart/location';
const Layout = lazy(() => import('../../layout/navbar'));

const Widgets = (props) => {

    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                    <Row gutter={15}>
                        <Col md={7}>
                            <Section>
                                <ProfileWedget />
                            </Section>
                        </Col>    
                        <Col md={17}>
                            <Section>
                                <GoogleArea />
                            </Section>
                        </Col>              
                    </Row>
                        <Margin>
                            <Row gutter={15}>
                                <Col md={8}>
                                        <NotifyBox
                                        color = '#a4d882'
                                        text1 = '98.8 %'
                                        text2 = 'Quality Support'
                                        icon = 'message'
                                    />
                                </Col> 
                                <Col md={8}>
                                    <NotifyBox
                                        color = '#5ba2e4'
                                        text1 = '210k'
                                        text2 = 'Good Reviews'
                                        icon = 'project'
                                    />
                                </Col> 
                                <Col md={8} >
                                    <NotifyBox
                                        color = '#f6da40'
                                        text1 = '500k'
                                        text2 = 'Creative Ideas'
                                        icon = 'user'
                                    />
                                </Col>
                            </Row>
                        </Margin>
                        <Margin>
                            <Row gutter={15}>
                                <Col md={18}>
                                    <Section>
                                        <CardFrame title="Location">
                                            <LocationChart />
                                        </CardFrame>
                                    </Section>
                                </Col>
                                <Col md={6}>
                                    <Section>
                                        <CardFrame title="Inbox">
                                            <MAilboxCom />
                                        </CardFrame>
                                    </Section>
                                </Col>
                            </Row>
                        </Margin>
               </Layout>
           </Suspense>
        </Fragment>
    );
}

export default Widgets;

