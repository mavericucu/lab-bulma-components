import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './Formfield';
import CoolButton from './Coolbutton';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      
      </div>
    );
  }
}

export default App;