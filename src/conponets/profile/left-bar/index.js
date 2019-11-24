import React from 'react';
import HeaderCon from './header';
import Comment from '../../comment';
import AddComment from '../../comment/add-comment';
import { Body } from './styled';


const LeftBar = () => {
    return (
        <div>
            <HeaderCon />
            <Body>
                <Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment>
                    </Comment>
                </Comment>
                    <AddComment />            
            </Body>
        </div>
    );
}

export default LeftBar;
