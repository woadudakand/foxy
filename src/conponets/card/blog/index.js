import React from 'react';
import { Figure, Image, Figcaption, P, H2, Separator, Button } from './styled';
import { NavLink } from 'react-router-dom';

const BlogFrame = (props) => {
    const { src, title, content } = props
    return (
        <Figure>
            <Image src={require(`${src}`)} alt=""/>
            <Figcaption>
                <H2><NavLink to="#" style={{color: '#000'}}>{title}</NavLink></H2>
                <Separator></Separator>
                <P>{content}</P>
                <Button>more</Button>
            </Figcaption>
        </Figure>
    );
}

export default BlogFrame;
