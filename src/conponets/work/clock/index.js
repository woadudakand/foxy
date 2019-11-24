import React from 'react';
import { Icon } from 'antd';
import { Wraper, IconWrap, H4 } from './styled';

const Clock = () => {
    return (
        <Wraper>
            <IconWrap>
                <Icon type="clock-circle" style={{color: '#fff', fontSize: '20px'}} />
            </IconWrap>
            <H4>1 Week ago</H4>
        </Wraper>
    );
}

export default Clock;
