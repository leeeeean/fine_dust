/*global google*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }
  componentDidMount() {
    console.log("map init");
    var latlng =  new  google.maps.LatLng(this.props.dust[this.props.id].data.city.geo[0],  this.props.dust[this.props.id].data.city.geo[1]);
    var map  =  new  google.maps.Map(this.map.current ,  {  
        mapTypeId:  google.maps.MapTypeId.ROADMAP,
        center:  latlng,  
        zoom:  11  
      });  
    var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
        getTileUrl:  function(coord,  zoom)  {  
          return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=70d8efad38844b4d5582432b51abd6e1bf419a20";  
        },  
        name:  "Air  Quality",  
      });  
    map.overlayMapTypes.insertAt(0,waqiMapOverlay); 
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.error) return false;
    console.log("map update")
    var latlng =  new  google.maps.LatLng(nextProps.dust[nextProps.id].data.city.geo[0], nextProps.dust[nextProps.id].data.city.geo[1]);
    var map  =  new  google.maps.Map(this.map.current ,  {  
        mapTypeId:  google.maps.MapTypeId.ROADMAP,
        center:  latlng,  
        zoom:  11 
      });  
    var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
        getTileUrl:  function(coord,  zoom)  {  
          return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=70d8efad38844b4d5582432b51abd6e1bf419a20";  
        },  
        name:  "Air  Quality",  
      });  
    map.overlayMapTypes.insertAt(0,waqiMapOverlay); 
    return this.props !== nextProps;
  }
  render() {
    return <div className='map' ref={this.map}></div>;
  }
}

function mapStateToProps(state) {
    return { 
      id: state.dust.id,
      dust: state.dust.cities,  
      error: state.dust.error
    };
  }

export default connect(mapStateToProps)(Map);

