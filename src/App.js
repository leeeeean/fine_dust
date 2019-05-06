import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/search_bar';
import LocationList from './components/loc_list';
import Detail from './components/detail';
import Map from './components/map';
import Explain from './components/explain'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App container mt-5">
        <header className="header">
          <h1>미세미세</h1>
        </header>
        <div className="row">
          <div className="col-10">
            <SearchBar />
            <div className="map" >
              <Map />
            </div>
            <Detail />
            <Explain />
          </div>
          <div className="col-2 loc">
            <LocationList />
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
function mapStateToProps(state) {
  return { 
    dust: state.dust.cities,  
    error: state.dust.error
  };
}

export default connect(mapStateToProps)(App);
