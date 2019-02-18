import React, { Component } from 'react';

class Formfield extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <div>
            <label>{this.props.label}</label>
          </div>
          <div>
            <input placeholder={this.props.placeholder} />
          </div>
        </form>
      </div>
    );
  }
}

export default Formfield;
