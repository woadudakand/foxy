import React from 'react';

import { AutoComplete } from 'antd';
import { connect } from 'react-redux';

const { Option, OptGroup } = AutoComplete;

const dataSource = [
    {
      title: 'Libraries',
      children: [
        {
          title: 'AntDesign',
          count: 10000,
        },
        {
          title: 'AntDesign UI',
          count: 10600,
        },
      ],
    },
    {
      title: 'Solutions',
      children: [
        {
          title: 'AntDesign UI',
          count: 60100,
        },
        {
          title: 'AntDesign',
          count: 30010,
        },
      ],
    },
    {
      title: 'Articles',
      children: [
        {
          title: 'AntDesign design language',
          count: 100000,
        },
      ],
    },
  ];

  function renderTitle(title) {    
    return (
        <span>
        {title}
        <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
        </span>
    );
}
//console.log(data)
const Options = (props) => {   
    return  dataSource.map((group, key) => (
                    <OptGroup key={key} label={renderTitle(group.title)}>                        
                    {group.children.map((opt, key) => (
                        <Option key={key} value={opt.title}>
                        {opt.title}
                        <span className="certain-search-item-count">{opt.count} people</span>
                        </Option>
                    ))}
                    </OptGroup>
                ))
                .concat([
                    <Option disabled key="all" className="show-all">
                    <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
                        View all results
                    </a>
                    </Option>,
                ])
           
}

const mapStateToProps = state => {
    return {
      hSearch : state.hSearch
    }
  }
  
export default connect(mapStateToProps, null)(Options);
