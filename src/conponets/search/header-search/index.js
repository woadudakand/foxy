import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';

import { options } from './config';
import { Wraper } from './search-style';

const HeaderSearch = () => {
    return (
        
        <Wraper className="certain-category-search-wrapper">
            <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={true}
                dropdownStyle={{ width: 300 }}
                size="large"
                style={{ width: '100%' }}
                dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        </Wraper>
       
    );
}

export default HeaderSearch;
