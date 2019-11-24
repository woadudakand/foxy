import React, { useState, useEffect } from 'react';
import { Icon, Input} from 'antd';
import './style.css';

import { Wraper } from './search-style';
import { createSearch } from '../../../redux/actions/h-data-search';
import { connect } from 'react-redux';

const HeaderSearch = (props) => {
    const [ data, setData ] = useState(null);    
    
    const handleChange = (event) => {
        setData(event.target.value);        
    }
    
    useEffect(() => {
        props.create(data);
    });
           
    return (
        
        <Wraper className="certain-category-search-wrapper">
        
            <Input 
                suffix = {<Icon type="search" 
                className = "certain-category-icon" 
                style = {{borderRadius : '20px'}}
                />} 
                onInput={ handleChange }                    
            />
                       
        </Wraper>

    );
}

const mapStateToProps = state => {
    return {
      hSearch : state.hSearch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create : (data) => dispatch(createSearch(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
