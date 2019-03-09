import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    );
  }
}

export default App;
