import React, {Fragment} from 'react';

import { Button } from './style';
import { Icon } from 'antd';

const SocialButton = (props) => {
    const {bg, hover, tColor, hColor, icon} = props;
    return (
        <Fragment>
            <Icon type={icon} style={{fontSize: '25px'}} />
            <Button 
                bg={bg} 
                hover={hover}
                tColor={tColor}
                hColor={hColor}
            >
                18
            </Button>
        </Fragment>
    );
}

export default SocialButton;
