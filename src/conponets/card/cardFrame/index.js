import React from 'react';
import { Card, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const CardFrame = (props) => {
    return (
        <div>
            <Card title={props.title} extra={<NavLink to="#"><Icon type="more" /></NavLink>} style={{ width: '100%' }}>
                { props.children }
            </Card>            
        </div>
    );
}

export default CardFrame;
