import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class Detail extends Component {
  renderDetail(dust, id) {
    if (this.props.error) return;
    const pm25 = dust[id].data.iaqi.pm25.v;
    var status = '';
    var clsName = '';
    if(pm25 <= 50){
      status = '좋음'
      clsName = 'col-6 green h1m'
    } else if (pm25 <= 100){
      status = '보통'
      clsName = 'col-6 yellow h1m'
    } else if (pm25 <= 150){
      status = '약간 해로움'
      clsName = 'col-6 orange h1m'
    } else if (pm25 <= 200){
      status = '해로움'
      clsName = 'col-6 red h1m'
    } else if (pm25 <= 300){
      status = '매우 해로움'
      clsName = 'col-6 purple h1m'
    } else {
      status = '위험'
      clsName = 'col-6 brown h1m'
    }
    return (  
      <div>
        <h2>{dust[id].data.city.name}</h2>
        <div className="row">
          <div className={clsName}>
            <h1>{dust[id].data.iaqi.pm25.v}</h1>
          </div>
          <div className="col-6">
            <h3>{status}</h3>
            <p>Updated on {dust[id].data.time.s}</p>
            <p>온도 : {dust[id].data.iaqi.t.v} °C</p>
          </div>  
        </div>
        <Table bordered>
          <tbody>
            <tr>
              <th>PM2.5</th>
              <th>PM10</th>
              <th>CO</th>
              <th>SO2</th>
              <th>NO2</th>
              <th>O3</th>
            </tr>
            <tr>
              <td>{dust[id].data.iaqi.pm25.v}</td>
              <td>{dust[id].data.iaqi.pm10.v}</td>
              <td>{dust[id].data.iaqi.co.v}</td>
              <td>{dust[id].data.iaqi.so2.v}</td>
              <td>{dust[id].data.iaqi.no2.v}</td>
              <td>{dust[id].data.iaqi.o3.v}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return(
      <div>
        {this.renderDetail(this.props.dust, this.props.id)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    id: state.dust.id,
    dust: state.dust.cities,  
    error: state.dust.error
  };
}

export default connect(mapStateToProps)(Detail);