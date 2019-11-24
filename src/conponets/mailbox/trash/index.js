import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MailList from '.././mail-list/inbox';

const InboxCom = (props) => {    
    const { mail } = props;
    const filter = mail.filter(item => {
        return item.type === "trash";
    })
    return (
        <Fragment>
            {
                filter.length ? filter.map(mail => {
                    const { username, id, content, type, subject } = mail;
                    return <MailList 
                        name = {username}
                        id = {id}
                        content = {content}
                        type = {type}
                        subject = {subject}
                        key = {id}
                    />  
                }) : (<h1 style={{padding: '15px'}}>No Trash</h1>)
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
