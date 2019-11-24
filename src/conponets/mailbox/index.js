import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MailList from './mail-list/inbox';
const Mailbox = (props) => {
    const { mail } = props;

    return (
        <Fragment>
            {
                mail.map(mail => {
                    const { username, id, content, type, subject } = mail;
                    return <MailList 
                        name = {username}
                        id = {id}
                        content = {content}
                        type = {type}
                        subject = {subject}
                        key = {id}
                    />  
                })
            }
        </Fragment>
    );
}
const mapStateToProps = state => {
    return {
        mail : state.mail
    }
}
export default connect(mapStateToProps)(Mailbox);
