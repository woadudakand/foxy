import React, { Fragment, lazy, Suspense} from 'react';
import Notification from '../../conponets/notification';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { Section, One } from './dash-style';
import { analythics } from './config';
import { config } from './chart-config';
import TlActivites from '../../conponets/timeline/activites';
import Members from '../../conponets/owl-carousel/members';
import Work from '../../conponets/work';
import { NavLink } from 'react-router-dom';
import AreaChart from '../../conponets/chart/chartjs2/area-chart';


const Layout = lazy(() => import('../../layout/navbar'));
const BarChart = lazy(() => import('../../conponets/chart/chartjs2/barchart'));
const TwitterCom = lazy(() => import('../../conponets/twitter'));
const GoogleCom = lazy(() => import('../../conponets/google+'));

const index = () => {
    return (
       <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
                <Layout>
                    <Notification />
                    <Section>
                        <Row gutter={15}>
                            <Col md={12}>
                                <CardFrame title='Analythics' menu={analythics} >
                                    <BarChart />
                                </CardFrame>
                            </Col>
                            <Col md={12}>
                                <CardFrame title='Activites' menu={analythics} >
                                    <TlActivites />
                                </CardFrame>
                            </Col>
                        </Row>
                    </Section>
                    <Section>
                        <Row gutter={15}>
                            <Col md={12}>
                                <CardFrame title='Members' >
                                    <Members />
                                </CardFrame>
                            </Col> 
                            <Col md={6}>
                                <TwitterCom />
                            </Col>    
                            <Col md={6}>
                                <GoogleCom />
                            </Col>                        
                        </Row>
                    </Section>
                    <Section>
                        <NavLink to="#">
                            <One>
                                <Row gutter={15}>
                                    <Col md={24}>
                                        <Work
                                            src={require('../../conponets/work/intro/blog-post.jpg')}
                                            percent={40}
                                            color="#547df9"
                                        />
                                    </Col>
                                                        
                                </Row>
                            </One>
                            <One>
                                <Row gutter={15}>
                                    <Col md={24}>
                                        <Work
                                            src={require('../../conponets/work/intro/blog-post.jpg')}
                                            percent={70}
                                            color="#a4d882"
                                        />
                                    </Col>
                                                        
                                </Row>
                            </One>
                            <One>
                                <Row gutter={15}>
                                    <Col md={24}>
                                        <Work
                                            src={require('../../conponets/work/intro/blog-post.jpg')}
                                            percent={60}
                                            color="#f6da40"
                                        />
                                    </Col>
                                                        
                                </Row>
                            </One>
                        </NavLink>
                    </Section>
                    <Section>
                        <Row gutter={15}>
                            <Col md={24}>
                                <CardFrame title='Sales' >
                                    <AreaChart 
                                        ctxLabel={config.ctxLabel}
                                        ctxData1={config.ctxData1}
                                        ctxData2={config.ctxData2}
                                        ctxColor1={config.ctxColor1}
                                        ctxColor2={config.ctxColor2}
                                    />
                                </CardFrame>
                            </Col>                            
                        </Row>
                    </Section>

                </Layout>
           </Suspense>
       </Fragment>
    );
}

export default index;
