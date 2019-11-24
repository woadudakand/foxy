import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import BarChart from '../../conponets/chart/chartjs2/barchart';
import { Section } from '../dashboard/dash-style';
import AreaChart from '../../conponets/chart/chartjs2/area-chart';
import { config } from './chart-config';

const Layout = lazy(() => import('../../layout/navbar'));

const Chart = () => {

    

    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                   <Section>
                        <Row gutter={15}>
                            <Col span={20} offset={2}>
                                <CardFrame title='Bar Charts' >
                                    <BarChart />
                                </CardFrame>
                            </Col>                                                 
                        </Row>
                   </Section>
                   <Section>
                        <Row gutter={15}>
                            <Col span={20} offset={2}>
                                <CardFrame title='Area Charts' >
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

export default Chart;
