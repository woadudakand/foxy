import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { Calendar } from 'antd';

const Layout = lazy(() => import('../../layout/navbar'));

const CalendarCom = () => {

    function onPanelChange(value, mode) {
        console.log(value, mode);
    }

    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                <Row gutter={15}>
                        <Col md={24}>
                            <CardFrame title='Calender' >
                                <Calendar onPanelChange={onPanelChange} />
                            </CardFrame>
                        </Col>                       
                    </Row>
               </Layout>
           </Suspense>
        </Fragment>
    );
}

export default CalendarCom;
