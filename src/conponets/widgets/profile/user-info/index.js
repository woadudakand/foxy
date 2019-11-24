import React from 'react';
import UserBadge from '../../../badge/user-badge';
import { Wraper, UserInfo } from './styled';

const UserInfoWidget = () => {
    return (
        <Wraper>
            <UserBadge size={120} 
                dotColor='green'
                dotSize="10px"
            />
            <UserInfo>
                <h4>Ricardo P. Smith</h4>
                <span>admin</span>
            </UserInfo>                                                   
        </Wraper>
    );
}

export default UserInfoWidget;
