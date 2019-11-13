import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const NavItems = () => {
    return (
        <div>           
            <Menu
                mode='vertical'
                theme='dark'
            >
                <Menu.Item key="1">
                    <NavLink to='/'>
                        <Icon type="mail" />
                    <span>Dashboard</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="calendar" />
                    <span>Navigation two</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                    <span>
                        <Icon type="appstore" />
                        <span>Navigation Three</span>
                    </span>
                    }
                >
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                    <SubMenu key="sub1-2" title="Submenu">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                    <span>
                        <Icon type="setting" />
                        <span>Navigation Four</span>
                    </span>
                    }
                >
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}

export default NavItems;
