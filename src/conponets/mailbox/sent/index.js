import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MailList from '.././mail-list/inbox';

const InboxCom = (props) => {    
    const { mail } = props;
    const filter = mail.filter(item => {
        return item.type === "sent";
    })
    return (
        <Fragment>
            {
                filter.map(mail => {
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
export default connect(mapStateToProps)(InboxCom);
