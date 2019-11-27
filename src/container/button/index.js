import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { connect } from 'react-redux';
import { Section, Info, Wraper } from './style';
import Button from '../../conponets/button/default';
import ButtonSocial from '../../conponets/button/social';
const Layout = lazy(() => import('../../layout/navbar'));

const ButtonCon = (props) => {
    
    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                    <Row gutter={15}>
                        <Col md={24}>
                            <CardFrame title='Buttons' >
                                <Section>
                                    <h2>DEFAUL BUTTON</h2>
                                    <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready.</p>
                                    <Row>                                        
                                        <Col md={3}>
                                            <Button 
                                                bg="#ebeef4" 
                                                hover="#242525"
                                                tColor="#000"
                                                hColor="#fff"
                                            />
                                            <Info bg="#ebeef4">
                                                <div className="box"></div>
                                                <p>NORMAL <br /><small>#ebeef4</small></p>                                                
                                            </Info>
                                            <Info bg="#242525">
                                                <div className="box"></div>
                                                <p>Hover <br /><small>#242525</small></p>                                                
                                            </Info>
                                        </Col>
                                        <Col md={3}>
                                            <Button 
                                                bg="#547df9" 
                                                hover="#7b9bfb"
                                                tColor="#fff"
                                                hColor="#fff"
                                            />
                                            <Info bg="#547df9">
                                                <div className="box"></div>
                                                <p>NORMAL <br /><small>#547df9</small></p>                                                
                                            </Info>
                                            <Info bg="#7b9bfb">
                                                <div className="box"></div>
                                                <p>Hover <br /><small>#7b9bfb</small></p>                                                
                                            </Info>
                                        </Col>
                                        <Col md={3}>
                                            <Button 
                                                bg="#2196f3" 
                                                hover="#68bcff"
                                                tColor="#fff"
                                                hColor="#fff"
                                            />
                                            <Info bg="#2196f3">
                                                <div className="box"></div>
                                                <p>NORMAL <br /><small>#2196f3</small></p>                                                
                                            </Info>
                                            <Info bg="#68bcff">
                                                <div className="box"></div>
                                                <p>Hover <br /><small>#68bcff</small></p>                                                
                                            </Info>
                                        </Col>
                                        <Col md={3}>
                                            <Button 
                                                bg="#8bc34a" 
                                                hover="#b1e179"
                                                tColor="#fff"
                                                hColor="#fff"
                                            />
                                            <Info bg="#8bc34a">
                                                <div className="box"></div>
                                                <p>NORMAL <br /><small>#8bc34a</small></p>                                                
                                            </Info>
                                            <Info bg="#b1e179">
                                                <div className="box"></div>
                                                <p>Hover <br /><small>#b1e179</small></p>                                                
                                            </Info>
                                        </Col>
                                        <Col md={3}>
                                            <Button 
                                                bg="#fdd835" 
                                                hover="#FFEB3B"
                                                tColor="#fff"
                                                hColor="#fff"
                                            />
                                            <Info bg="#fdd835">
                                                <div className="box"></div>
                                                <p>NORMAL <br /><small>#fdd835</small></p>                                                
                                            </Info>
                                            <Info bg="#FFEB3B">
                                                <div className="box"></div>
                                                <p>Hover <br /><small>#FFEB3B</small></p>                                                
                                            </Info>
                                        </Col>
                                        <Col md={3}>
                                            <Button 
                                                bg="#bd081c" 
                                                hover="#df4b38"
                                                tColor="#fff"
                                                hColor="#fff"
                                            />
                                            <Info bg="#bd081c">
                                                <div className="box"></div>
                                                <p>NORMAL <br /><small>#bd081c</small></p>                                                
                                            </Info>
                                            <Info bg="#df4b38">
                                                <div className="box"></div>
                                                <p>Hover <br /><small>#df4b38</small></p>                                                
                                            </Info>
                                        </Col>
                                    </Row>
                                </Section>                                                
                            </CardFrame>
                        </Col> 

                        <Col md={24}>
                            <Wraper>
                                <CardFrame title='Buttons' >
                                    <Section>
                                        <h2>Social icons</h2>
                                        <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready.</p>
                                        <Row>                                        
                                            <Col md={3}>
                                                <ButtonSocial 
                                                    bg="#55acee" 
                                                    hover="#242525"
                                                    tColor="#fff"
                                                    hColor="#fff"
                                                    icon="twitter"
                                                />                                                
                                            </Col> 
                                            <Col md={3}>
                                                <ButtonSocial 
                                                    bg="#3b5998" 
                                                    hover="#242525"
                                                    tColor="#fff"
                                                    hColor="#fff"
                                                    icon="facebook"
                                                />                                                
                                            </Col> 
                                            <Col md={3}>
                                                <ButtonSocial 
                                                    bg="#df4b38" 
                                                    hover="#242525"
                                                    tColor="#fff"
                                                    hColor="#fff"
                                                    icon="google-plus"
                                                />                                                
                                            </Col> 
                                            <Col md={3}>
                                                <ButtonSocial 
                                                    bg="#34465d" 
                                                    hover="#242525"
                                                    tColor="#fff"
                                                    hColor="#fff"
                                                    icon="google"
                                                />                                                
                                            </Col> 
                                            <Col md={3}>
                                                <ButtonSocial 
                                                    bg="#bd081c" 
                                                    hover="#242525"
                                                    tColor="#fff"
                                                    hColor="#fff"
                                                    icon="instagram"
                                                />                                                
                                            </Col>                               
                                        </Row>
                                    </Section>                                                
                                </CardFrame>                                
                            </Wraper>
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
export default connect(mapStateToProps)(ButtonCon);
