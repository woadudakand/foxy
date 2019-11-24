import React from 'react';

import { Avatar, Badge } from 'antd';

const UserBadge = (props) => {
    return (        
        <Badge dot style={{
            background: props.dotColor && props.dotColor,
            width: props.dotSize && props.dotSize,
            height: props.dotSize && props.dotSize,
        }}>
            <Avatar size={props.size ? props.size : 50} icon="user" />            
        </Badge>
    );
}

export default UserBadge;
