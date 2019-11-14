import React from 'react';
import { Timeline } from 'antd';
import { H4, P } from './style';
const TlActivites = () => {
    return (
        <Timeline>
            <Timeline.Item color={'red'}>
                <H4>Mark write message</H4>
                <p>2 min ago</p>
            </Timeline.Item>
            <Timeline.Item color={'green'}>
                <H4>Anna create new website</H4>
                <p>1 hours ago ago</p>
            </Timeline.Item>
            <Timeline.Item color={'blue'}>
                <H4>Jonatan send new message</H4>
                <p>2 min ago</p>
            </Timeline.Item> 
            <Timeline.Item color={'silver'}>
                <H4>Mark write message</H4>
                <p>2 min ago</p>
            </Timeline.Item>
            <Timeline.Item color={'green'}>
                <H4>Jonatan send new message</H4>
                <P>10 min ago</P>
            </Timeline.Item>          
        </Timeline>
    );
}

export default TlActivites;
