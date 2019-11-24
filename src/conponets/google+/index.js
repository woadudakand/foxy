import React from 'react';
import { Google, Image, ChildWrap, H3, Span, P } from './styled';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const GoogleCom = () => {
    return (
        <Google>
            <Image src={require('./img/google.png')} alt="" />
            <ChildWrap>
                <NavLink to="#">
                    <H3><Icon style={{fontSize : '40px'}} type="google-plus"></Icon><Span>Della M. Jarrard</Span></H3>                
                </NavLink>                
                <P>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam <br /> volutpat al.</P>
                <p>3 hours ago</p>
            </ChildWrap>
        </Google>
    );
}

export default GoogleCom;
