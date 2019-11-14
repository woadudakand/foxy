import React, { Fragment, lazy, Suspense} from 'react';
import Notification from '../../conponets/notification';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { Section } from './dash-style';

const Layout = lazy(() => import('../../layout/navbar'));
const index = () => {
    return (
       <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
                <Layout>
                    <Notification />
                    <Section>
                        <Row gutter={15}>
                            <Col md={12}>
                                <CardFrame title='Analythics' >
                                    Yes
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
