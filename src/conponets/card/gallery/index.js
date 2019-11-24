import React from 'react';
import { Figure, Image, Figcaption, P, Wraper } from './styled';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

const GalleryFrame = (props) => {
    const { src, title, id, click } = props;    
    return (
        <Figure>
            <Image src={require(`${src}`)} alt=""/>
            <Figcaption>
                <P><NavLink to="#" style={{color: '#000'}}>{title}</NavLink></P>
                <Wraper>
                    <NavLink to="#" style={{color: '#000'}}>
                        <Icon type="reload" style={{fontSize : "16px", paddingRight: "8px"}} />
                    </NavLink>
                    <NavLink to="#" style={{color: '#000'}} id={id} onClick={click} >
                        <Icon type="delete" style={{fontSize : "16px"}} />
                    </NavLink>
                </Wraper>
            </Figcaption>
        </Figure>
    );
}
export default GalleryFrame;
