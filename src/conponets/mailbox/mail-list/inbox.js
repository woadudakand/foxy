import React from 'react';
import { List } from './style';
import { Checkbox, Icon, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

const MailList = (props) => {
    const { name, subject, type } = props;
    return (
        <NavLink to="#">
            <List>
                <Checkbox />
                <Icon type="star" />
                <Avatar size={64} icon="user" />
                <div>
                    <h3>{type === 'inbox' ? `From : ${name}` : type === 'sent' ? `To : ${name}` : `draft : ${name}`}</h3>
                    <p>Subject : {subject !== '' ? subject : "No Subject"}</p>
                </div>
            </List>
        </NavLink>           
    );
}

export default MailList;
