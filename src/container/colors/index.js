import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { connect } from 'react-redux';
import { Section, Wraper } from './style';
import RoundBox from '../../conponets/colors/round-box';
import ColorPalette from '../../conponets/colors/palette';
import Choose from '../../conponets/colors/choose';
import Text from '../../conponets/colors/text';

const Layout = lazy(() => import('../../layout/navbar'));

const Colors = (props) => {
    
    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                <Row gutter={15}>
                        <Col md={24}>
                            <CardFrame title='Colors' >
                                <Row gutter={30}>
                                    <Col md={24} >

                                        <Section>
                                            <h2>Google material colors</h2>
                                            <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready.</p>
                                            <Row>
                                                <Col md={3}>
                                                    <RoundBox color="#e4eaec" fColor="#000000" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#526069" fColor="#ffffff" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#547df9" fColor="#ffffff" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#f44336" fColor="#ffffff" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#9c27b0" fColor="#ffffff" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#2196f3" fColor="#ffffff" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#ffc107" fColor="#ffffff" />
                                                </Col>
                                                <Col md={3}>
                                                    <RoundBox color="#795548" fColor="#ffffff" />
                                                </Col>
                                            </Row>
                                        </Section>
                                    </Col>
                                    <Col md={24}>

                                        <Section>
                                            <h2>Google material palette</h2>
                                            <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready.</p>
                                            <Row gutter={30}>                                           
                                                <Col md={6}>
                                                    <Wraper>
                                                        <ColorPalette title="Red" color="#F44336" />
                                                        <ColorPalette title="500" color="#F44336" value="#F44336" />
                                                        <ColorPalette title="400" color="#EF5350" value="#EF5350" />
                                                        <ColorPalette title="500" color="#F44336" value="#F44336" />
                                                        <ColorPalette title="600" color="#e53935" value="#e53935" />
                                                        <ColorPalette title="700" color="#d32f2f" value="#d32f2f" />
                                                        <ColorPalette title="800" color="#c62828" value="#c62828" />
                                                        <ColorPalette title="900" color="#b71c1c" value="#b71c1c" />
                                                    </Wraper>
                                                </Col>
                                                <Col md={6}>
                                                    <Wraper>
                                                        <ColorPalette title="Purple" color="#9c26b0" />
                                                        <ColorPalette title="500" color="#9c26b0" value="#9c26b0" />
                                                        <ColorPalette title="400" color="#ba68c8" value="#ba68c8" />
                                                        <ColorPalette title="500" color="#ac47bc" value="#ac47bc" />
                                                        <ColorPalette title="600" color="#9c26b0" value="#9c26b0" />
                                                        <ColorPalette title="700" color="#8d23aa" value="#8d23aa" />
                                                        <ColorPalette title="800" color="#7b1fa2" value="#7b1fa2" />
                                                        <ColorPalette title="900" color="#6a1b9a" value="#6a1b9a" />
                                                    </Wraper>
                                                </Col>
                                                <Col md={6}>
                                                    <Wraper>
                                                        <ColorPalette title="Red" color="#e91f63" />
                                                        <ColorPalette title="500" color="#e91f63" value="#e91f63" />
                                                        <ColorPalette title="400" color="#e91e62" value="#e91e62" />
                                                        <ColorPalette title="500" color="#e91e62" value="#e91e62" />
                                                        <ColorPalette title="600" color="#d81c60" value="#d81c60" />
                                                        <ColorPalette title="700" color="#c2195c" value="#c2195c" />
                                                        <ColorPalette title="800" color="#ae1457" value="#ae1457" />
                                                        <ColorPalette title="900" color="#880e4f" value="#880e4f" />
                                                    </Wraper>
                                                </Col>                                          
                                            </Row>
                                        </Section>
                                    </Col>
                                    <Col md={13}>
                                        <Section>
                                            <h2>Choose your palette</h2>
                                            <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready.</p>
                                            <Row gutter={30}>                                           
                                                <Col md={12}>
                                                    <Wraper>
                                                        <Choose title="Active Color" color="#547df9" size="700" />
                                                        <Choose title="Base Color" color="#9eaee5" size="600" />
                                                        <Choose title="Hover Color" color="#cbd2eb" size="500" />
                                                        <Choose title="Background Opt" color="#dce3fa" size="100" />                                                        
                                                    </Wraper>
                                                </Col> 
                                                <Col md={12}>
                                                    <Wraper>
                                                        <Choose title="Active Color" color="#2196f3" size="700" />
                                                        <Choose title="Base Color" color="#69aee6" size="600" />
                                                        <Choose title="Hover Color" color="#96cffc" size="500" />
                                                        <Choose title="Background Opt" color="#b8daf5" size="100" />                                                        
                                                    </Wraper>
                                                </Col>                                                                                    
                                            </Row>
                                        </Section>
                                    </Col>
                                    <Col md={11}>
                                        <Section>
                                            <h2>Text Color</h2>
                                            <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready.</p>
                                            <Row gutter={30}>                                           
                                                <Col md={24}>
                                                    <Wraper>
                                                        <Row gutter={50}>
                                                            <Text title="Title Color" color="#7e8083" />
                                                            <Text title="Subtitle Color" color="#626467" />
                                                            <Text title="Text Color" color="#3f454b" />
                                                        </Row>                                                       
                                                    </Wraper>
                                                </Col>                                                                                                                                
                                            </Row>
                                        </Section>
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
const mapStateToProps = state => {
    return {
        gallery : state.gallery
    }
}
export default connect(mapStateToProps)(Colors);
