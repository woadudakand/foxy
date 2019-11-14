import React, { Component, Fragment } from 'react';
import { Layout, Col, Row } from 'antd';
import NavItems from './items';
import HeaderLogo from '../../conponets/logo/header-logo';
import BtnDrawer from '../../conponets/button/btn-drawer';
import HeaderSearch from '../../conponets/search/header-search';
import UserBadge from '../../conponets/badge/user-badge';
import { Wraper, UserInfo, MessageInfo, Span, AlertWraper, Hr } from './navbar-style';
import MessageBadge from '../../conponets/badge/mail&notify';
const { Header, Sider, Content } = Layout;

class Index extends Component {
    state = {
        show: true,
        collapsed: false,        
        visible: false
    };

    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
          visible: false,
        });
    };


    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };    
    
    render() {
        
        return (
            <Fragment>               
                 <Layout>                 
                    <Sider className="ant-layout-sider-dark" trigger={null} collapsible collapsed={this.state.collapsed}>
                        <HeaderLogo />                       
                        <NavItems />
                    </Sider>
                    <Layout>
                        <Header className="pl-3 pb-3" style={{ 
                            background: '#fff', 
                            padding: 0, 
                            height: 139,
                            boxShadow : '0px 1px 4px -2px'
                        }}>                            
                            <Row>                                
                                <Col md={24}>
                                    <div className="header-search">
                                        <Row>
                                            <Col md={12}>
                                                <BtnDrawer 
                                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                                    click={this.toggle} 
                                                />
                                            </Col>
                                            <Col md={12}>
                                                <HeaderSearch />                                          
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>                                
                            </Row>
                            <Hr />                          
                            <Row>                                
                                <Col md={12}>                                
                                    <Wraper>
                                        <UserBadge />
                                        <UserInfo>
                                            <h4>Ricardo P. Smith</h4>
                                            <span>admin</span>
                                        </UserInfo>                                        
                                    </Wraper>
                                </Col>
                                <Col md={12}>
                                    <AlertWraper>
                                        <Wraper>
                                            <MessageInfo>
                                                <Span>Message</Span>                                            
                                            </MessageInfo>
                                            <MessageBadge 
                                                type='mail'
                                                count={5}
                                            />
                                        </Wraper>
                                        <Wraper>
                                            <MessageInfo>
                                                <Span>Notification</Span>                                            
                                            </MessageInfo>
                                            <MessageBadge 
                                                type='bell'
                                                count={3}
                                            />
                                        </Wraper>
                                    </AlertWraper>
                                </Col>                               
                            </Row>                               
                        </Header>                        
                        <Content
                            style={{
                                margin: '24px 15px',
                                minHeight: '100vh',                                
                            }}
                        >
                        {
                            this.props.children
                        }                           
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

export default Index