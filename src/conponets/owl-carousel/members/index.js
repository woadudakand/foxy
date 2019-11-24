import React from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';
import './owl-custom-style.css';
import { Wraper, Image, Button, WraperChild } from './styled';
import { Icon } from 'antd';

const options = {
    items: 1,
    dots: true,
    nav: false,    
    autoplay: true,
    lazyLoad: true,
    dotData: true
};

const Members = (props) => {
    const { members } = props;
    return (
        <OwlCarousel options={options} >
            <div>
                {
                    members.map((member, key) => {
                        return ( 
                            <Wraper key={key}>
                                <WraperChild>
                                    <Icon type="star" style={{color : member.type === 'Admin' && '#ffd953'}} />
                                    <Image src={member.img} alt=""/>
                                    <h1>{member.name}</h1>
                                </WraperChild>
                                <Button type={member.type}>{member.type}</Button>
                            </Wraper>                       
                        )
                    })
                }
            </div>
            <div>
                {
                    members.map((member, key) => {
                        return ( 
                        
                            <Wraper key={key}>
                                <WraperChild>
                                    <Icon type="star" style={{color : member.type === 'Admin' && '#ffd953'}} />
                                    <Image src={member.img} alt=""/>
                                    <h1>{member.name}</h1>
                                </WraperChild>
                                <Button type={member.type}>{member.type}</Button>
                            </Wraper>     
                        
                        )
                    })
                }
            </div>
        </OwlCarousel>
    );
}

const mapStateToProps = state => {
    return {
        members : state.members
    }
}
export default connect(mapStateToProps)(Members);
