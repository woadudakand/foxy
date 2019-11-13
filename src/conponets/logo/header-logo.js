import React from 'react';
import { Logo, Title } from './header-logo-style';
import { NavLink } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <NavLink to='/'>
            <Logo>
                <img src={require('./img/logo.png')} alt="Logo"/>
                <Title>Foxy</Title>
            </Logo>
        </NavLink>       
    );
}

export default HeaderLogo;
