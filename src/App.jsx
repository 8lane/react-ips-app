import React, { Component } from 'react';
import { Link } from 'react-router';

import LoginFormContainer from './containers/LoginFormContainer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const username = '570dd55cef79003861ef3a2e936d87fb';
    const password = '';
    const auth = `${username}:${password}`;

    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${btoa(auth)}`
      }
    };

    const fetchApiDefaults = fetch('/api/core/hello', requestOptions)
      .then(res => res.json())
      .catch(err => console.log(err));

    fetchApiDefaults.then(data => this.setState({ siteDefaults: data }));
  }

  render() {
    let introMessage = null;

    if (this.state.siteDefaults) {
      console.log(this.state);
      introMessage = <h2>{this.state.siteDefaults.communityName}</h2>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/about">About</Link>
          {introMessage}
        </div>
        <LoginFormContainer />
        <br />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
