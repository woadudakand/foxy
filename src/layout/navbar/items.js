import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import {Div} from './navbar-style'
const { SubMenu } = Menu;

const NavItems = () => {
    
    return (
        <Div>           
            <Menu
                mode='vertical'
                theme='dark'
            >
                <Menu.Item key="1">

                    <NavLink to='/home'>
                        <Icon type="home" />
                        <span>Dashboard</span>
                    </NavLink>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                    <span>
                        <Icon type="appstore" />
                        <span>Components</span>
                    </span>
                    }
                >
                    <Menu.Item key="8">
                        <NavLink to='/progressbar'>
                            <Icon type="check-circle" />
                            <span>Progress Bar</span>                        
                        </NavLink>
                    </Menu.Item>                    
                    <Menu.Item key="11">
                        <NavLink to='/colors'>
                            <Icon type="bg-colors" />
                            <span>Colors</span>                        
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="12">
                        <NavLink to='/btn'>
                            <Icon type="code" />
                            <span>Button</span>                        
                        </NavLink>                   
                    </Menu.Item>                    
                </SubMenu>  
                     
                <Menu.Item key="2">
                    <NavLink to='/blog'>
                        <Icon type="bold" />
                        <span>Blog</span>                        
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="3">
                    <NavLink to='/calendar'>
                        <Icon type="calendar" />
                        <span>Calendar</span>                        
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                    <NavLink to='/charts'>
                        <Icon type="bar-chart" />
                        <span>Charts</span>                        
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="5">
                    <NavLink to='/gallery'>
                        <Icon type="file-image" />
                        <span>Gallery</span>                        
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="6">
                    <NavLink to='/mail'>
                        <Icon type="message" />
                        <span>Mailbox</span>                        
                    </NavLink>
                </Menu.Item>  
                              
                <Menu.Item key="9">
                    <NavLink to='/profile'>
                        <Icon type="profile" />
                        <span>Profile</span>                        
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="10">
                    <NavLink to='/widgets'>
                        <Icon type="box-plot" />
                        <span>Widgets</span>                        
                    </NavLink>
                </Menu.Item>
                        
            </Menu>
        </Div>
    );
}

export default NavItems;
