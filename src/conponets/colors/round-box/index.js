import React from 'react';
import { Box, P } from './style';

const RoundBox = (props) => {
    return (
        <Box color={props.color}>
            <P color={props.fColor}>{props.color}</P>
        </Box>
    );
}

export default RoundBox;
