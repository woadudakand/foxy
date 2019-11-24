import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import { Wraper } from './styled';
import LeftBar from '../../conponets/profile/left-bar';
import CardFrame from '../../conponets/card/cardFrame';
import DoughnutCon from '../../conponets/chart/chartjs2/doughnut';

const Layout = lazy(() => import('../../layout/navbar'));

const Profile = (props) => {

    const config = ({
        ctxLabel : [
        'Red',        
        'Blue'
    ],
        ctxData1 : [70, 30],
    });

    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                <Row gutter={15}>
                        <Col md={18}>
                           <Wraper>
                                <LeftBar></LeftBar>
                           </Wraper>
                        </Col>
                        <Col md={6}>
                           <Wraper>
                                <CardFrame title="Analythics" >
                                    <DoughnutCon                                         
                                        ctxData1={config.ctxData1}
                                    />
                                    <br />
                                    <ul>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                    </ul>
                                </CardFrame>
                                <br />
                                <CardFrame title="Attendance" >
                                    <DoughnutCon                                         
                                        ctxData1={config.ctxData1}
                                    />
                                    <br />
                                    <ul>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                        <li>Sweet & Simple LTD.</li>
                                    </ul>
                                </CardFrame>
                           </Wraper>
                        </Col>                       
                    </Row>
               </Layout>
           </Suspense>
        </Fragment>
    );
}

export default Profile;

