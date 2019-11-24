import React from 'react';
import { Wraper } from './style';

const Box = (props) => {
    return (
        <Wraper>
            <p>{props.text}</p>
            <h3>{props.title}</h3>
        </Wraper>
    );
}

export default Box;
