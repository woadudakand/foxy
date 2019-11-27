import React from 'react';
import { Palette } from './style';

const ColorPalette = (props) => {
    return (
        <Palette color={props.color}>
            <span>{props.title}</span>
            <span>{props.value}</span>
        </Palette>
    );
}

export default ColorPalette;
