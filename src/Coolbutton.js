import React, { Component } from 'react';

class Coolbutton extends Component {
  render() {
    return (
      <button onClick={this.props.changeStyles} style={this.props.styles}>{this.props.children}</button>
    );
  }
}

export default Coolbutton;