import React from 'react';

import { Icon } from 'antd';
import { Button } from './btn-styled';

const BtnDrawer = (props) => {
    return (
        <Button 
            onClick={props.click}
        >
            <Icon
                type={props.type}
                className="trigger"                
            /> 
        </Button>
    );
}

export default BtnDrawer;
