import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLocation } from '../actions';
import { bindActionCreators } from 'redux';
import _ from 'lodash';


class LocationList extends Component {
  handleError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          존재하지 않는 도시 입니다
        </div>
      );
    }
  }
  render() {
    return (
      <div className='dust-list' >
        { this.handleError() }
        <ul className='list-group'>
          <li className='list-group-item ihead'> 검색내역 </li>
          {_.map(this.props.dust, (city) => (
            <li
              key={city.data.idx}
              onClick={() => this.props.selectLocation(city)}
              className='list-group-item'
            >
              {city.data.city.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    id: state.dust.id,
    dust: state.dust.cities,  
    error: state.dust.error
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectLocation}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);