import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from './nav-styled';
import { Icon } from 'antd';

const Nav = () => {
    return (
        <Navbar>
            <ul>
                <li><NavLink to="/compose"><Icon type="edit" /> Compose</NavLink></li>
                <li><NavLink to="/mail"><Icon type="red-envelope" /> All</NavLink></li>
                <li><NavLink to="/inbox"><Icon type="mail" /> Inbox</NavLink></li>
                <li><NavLink to="/sent"><Icon type="message" /> Sent</NavLink></li>
                <li><NavLink to="/draft"><Icon type="save" /> Draft</NavLink></li>
                <li><NavLink to="/trash"><Icon type="delete" /> Trash</NavLink></li>
            </ul>
        </Navbar>
    );
}

export default Nav;
