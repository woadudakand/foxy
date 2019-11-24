import React, { Fragment, Suspense, lazy, useState } from 'react';
import { Row, Col, Button, Progress, Tooltip  } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { Wraper } from './style';

const Layout = lazy(() => import('../../layout/navbar'));
const ButtonGroup = Button.Group;

const Progressbar = (props) => {
    
    const [percent, setPercent] = useState(0);
    const [percentC, setPercentC] = useState(0);

    const increase = () => {
        
        setPercent(percent + 10);
        if (percent > 100) {
            setPercent(100)
        }
    };
    
    const decline = () => {
        
        setPercent(percent - 10);
        if (percent < 0) {
            setPercent(0);
        }
    };

    const increaseC = () => {
        
        setPercentC(percentC + 10);
        if (percentC > 100) {
            setPercentC(100)
        }
    };
    
    const declineC = () => {
        
        setPercentC(percentC - 10);
        if (percentC < 0) {
            setPercentC(0);
        }
    };

    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                <Row gutter={15}>
                        <Col md={24}>
                            <CardFrame title='Progress Bar' >
                                <Row gutter={50}>
                                    <Col md={12} >
                                        <Wraper>
                                            <Progress percent={30} />
                                            <Progress percent={50} status="active" />
                                            <Progress percent={70} status="exception" />
                                            <Progress percent={100} />
                                            <Progress percent={50} showInfo={false} />
                                        </Wraper>
                                    </Col>

                                    <Col md={12} >
                                        <Wraper>
                                            <Progress type="circle" percent={75} />
                                            <Progress type="circle" percent={70} status="exception" />
                                            <Progress type="circle" percent={100} />
                                        </Wraper>
                                    </Col>

                                    <Col md={12} >
                                        <Wraper>
                                            <Progress percent={percent} />
                                            <ButtonGroup>
                                                <Button onClick={decline} icon="minus" />
                                                <Button onClick={increase} icon="plus" />
                                            </ButtonGroup>
                                        </Wraper>                                        
                                    </Col>
                                    <Col md={12} >
                                        <Wraper>
                                            <Progress type="circle" percent={percentC} />
                                            <ButtonGroup>
                                            <Button onClick={declineC} icon="minus" />
                                            <Button onClick={increaseC} icon="plus" />
                                            </ButtonGroup>
                                        </Wraper>
                                    </Col>

                                    <Col md={12} >
                                        <Wraper>
                                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                                <Progress percent={60} successPercent={30} />
                                            </Tooltip>

                                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                                <Progress percent={60} successPercent={30} type="circle" />
                                            </Tooltip>

                                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                                <Progress percent={60} successPercent={30} type="dashboard" />
                                            </Tooltip>
                                        </Wraper>
                                    </Col>

                                    <Col md={12} >
                                        <Wraper>
                                            <Progress
                                                strokeColor={{
                                                    '0%': '#108ee9',
                                                    '100%': '#87d068',
                                                }}
                                                percent={99.9}
                                            />
                                            <Progress
                                                strokeColor={{
                                                    from: '#108ee9',
                                                    to: '#87d068',
                                                }}
                                                percent={99.9}
                                                status="active"
                                            />
                                            <Progress
                                                type="circle"
                                                strokeColor={{
                                                    '0%': '#108ee9',
                                                    '100%': '#87d068',
                                                }}
                                                percent={90}
                                            />
                                            <Progress
                                                type="circle"
                                                strokeColor={{
                                                    '0%': '#108ee9',
                                                    '100%': '#87d068',
                                                }}
                                                percent={100}
                                            />
                                        </Wraper>
                                    </Col>

                                </Row>                                
                            </CardFrame>
                        </Col>                       
                    </Row>
               </Layout>
           </Suspense>
        </Fragment>
    );
}

export default Progressbar;
