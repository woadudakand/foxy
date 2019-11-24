import React from 'react';
import { Comment, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

const CommentCon = ({children}) => {
    return (
        <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<NavLink to="#">Han Solo</NavLink>}
            avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
            }
            content={
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
            </p>
            }
        >
            {children}
        </Comment>
    );
}

export default CommentCon;
