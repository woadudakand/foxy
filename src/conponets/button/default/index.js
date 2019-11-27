import React from 'react';

import { Button } from './btn-style';

const BtnDefault = (props) => {
    const {bg, hover, tColor, hColor} = props;
    return (
        <Button 
            bg={bg} 
            hover={hover}
            tColor={tColor}
            hColor={hColor}
        >
            Button
        </Button>
    );
}

export default BtnDefault;
