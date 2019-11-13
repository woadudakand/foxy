import React from 'react';

import { Avatar, Badge } from 'antd';

const UserBadge = () => {
    return (        
        <Badge dot>
            <Avatar size={50} icon="user" />            
        </Badge>
    );
}

export default UserBadge;
