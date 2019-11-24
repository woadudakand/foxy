import React from 'react';
import { Wraper, Image, ChildWrap, P } from './style';

const Intro = (props) => {
    return (
        <Wraper>
            <Image src={props.src} alt=""/>
            <ChildWrap>
                <h4>New design work</h4>
                <P>UI/UX</P>
            </ChildWrap>
        </Wraper>
    );
}

export default Intro;
