import React, { Fragment } from 'react';
import { Avatar } from 'antd';
import { ParentWraper, ChildWraper, P, Small } from './notify-style';

const NotifyBox = (props) => {
    const {color, text1, text2, icon} = props;
    return (
        <Fragment>
            <ParentWraper>
                <Avatar size={50} icon={icon} style={{background : color}} />
                <ChildWraper>
                    <P>{text1}</P>
                    <Small>{text2}</Small>
                </ChildWraper>
            </ParentWraper>
        </Fragment>
    );
}

export default NotifyBox;
