import React from 'react';
import { Twitter, Image, ChildWrap, H3, Span, P } from './styled';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const TwitterCom = () => {
    return (
        <Twitter>
            <Image src={require('./img/twitter.png')} alt="" />
            <ChildWrap>
                <NavLink to="#">
                    <H3><Icon style={{fontSize : '40px'}} type="twitter"></Icon><Span>Lucas Fane</Span></H3>                
                </NavLink>                
                <P>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam <br /> volutpat al.</P>
                <p>3 hours ago</p>
            </ChildWrap>
        </Twitter>
    );
}

export default TwitterCom;
