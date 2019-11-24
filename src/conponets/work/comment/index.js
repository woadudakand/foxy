import React from 'react';
import { Icon } from 'antd';
import { Wraper, IconWrap, H4 } from './styled';

const Comment = () => {
    return (
        <Wraper>
            <IconWrap>
                <Icon type="message" style={{color: '#fff', fontSize: '20px'}} />
            </IconWrap>
            <H4>22 Comments</H4>
        </Wraper>
    );
}

export default Comment;
