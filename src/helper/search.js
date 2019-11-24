import React from 'react';

import {connect} from 'react-redux';

const Config = (props) => {
    return (
        <div>
            {props.hSearch}
        </div>
    )
}   


const mapStateToProps = state => {
  return {
    hSearch : state.hSearch
  }
}
export default connect(mapStateToProps)(Config);

