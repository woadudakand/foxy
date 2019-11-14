import React from 'react';
import { Card, Icon, Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';


const CardFrame = (props) => {
    return (
        <div>
            <Card 
                title={props.title} 
                extra={
                    <Dropdown overlay={props.menu} trigger={['click']}>
                        <NavLink to="#" style={{fontSize : '20px'}}>
                            <Icon type="more" />
                        </NavLink>
                    </Dropdown>
                } 
                style={{ width: '100%' }}
            >
                { props.children }
            </Card>            
        </div>
    );
}

export default CardFrame;
