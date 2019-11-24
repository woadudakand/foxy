import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';
import { Wraper } from './styled';
const Social = () => {
    return (
        <Wraper>
            <FacebookShareButton url={'shareUrl'} >
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={'shareUrl'} >
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={'shareUrl'} >
                <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>            
        </Wraper>
    );
}

export default Social;
