import React from 'react';
import UserBadge from '../../../conponets/badge/user-badge';
import { Wraper, UserInfo } from './styled';

const UserIn = () => {
    return (
        <Wraper>
            <UserBadge />
            <UserInfo>
                <h4>Ricardo P. Smith</h4>
                <span>admin</span>
            </UserInfo>                                        
        </Wraper>
    );
}

export default UserIn;
