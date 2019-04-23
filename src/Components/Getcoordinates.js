import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../actions/dataActions.js';

export class Getcoordinates extends Component {
  render() {
    return (
      <div>
        Latitude: {this.props.lat}<br/>
        Longitude: {this.props.long}
      </div>
    )
  }
}

const mapStatetoProps = state => ({
    lat:state.lat,
    long:state.long,
});

export default connect(mapStatetoProps, { getLocation })(Getcoordinates);