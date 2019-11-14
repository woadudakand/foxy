import React from 'react';
import { Icon, Badge, Dropdown } from 'antd';
import { mail, alert } from './popup';

const MailBadge = (props) => {
    return (
        <Dropdown overlay={props.type === 'mail' ? mail : alert}>
            <Badge count={props.count} style={{background : '#547df9'}}>
                <Icon style={{fontSize : '25px'}} type={props.type} />          
            </Badge>
        </Dropdown>
    );
}

export default MailBadge;
