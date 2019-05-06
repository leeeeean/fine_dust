import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class Explain extends Component {
  render() {
    return(
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th colSpan="2">농도(PM2.5)</th>
                        <th colSpan="5">건강에 유해한 정도</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="2" className="green">0 - 50</th>
                        <td colSpan="5">좋은 : 대기 오염의 위험이 거의 없음</td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="yellow">51 - 100</th>		
                        <td colSpan="5">보통 : 대기질은 괜찮으나 일부 오염물질 존재</td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="orange">101 - 150</th>
                        <td colSpan="5">약간 해로움 : 민감한 사람들에 영향을 줌</td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="red">151 - 200</th>
                        <td colSpan="5">해로움 : 모든 사람의 건강에 영향을 미침</td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="purple">201 - 300</th>
                        <td colSpan="5">매우 해로움 : 응급상황, 전체 인구가 영향을 받음</td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="brown">300 + </th>
                        <td colSpan="5">위험 : 심각한 건강상의 위협</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>주요 물질</th>
                        <th>PM2.5(미세머지)</th>
                        <th>PM10(호흡미립자)</th>
                        <th>CO(일산화탄소)</th>
                        <th>SO2(이황산가스)</th>
                        <th>NO2(이산화질소)</th>
                        <th>O3(오존)</th>
                    </tr>
                </tfoot>
            </Table>
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

export default connect(mapStateToProps)(Explain);