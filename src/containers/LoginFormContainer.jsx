import React from 'react';
import LoginForm from '../components/LoginForm';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      fullName: null,
      formValid: true,
      formError: null,
      loggedIn: false
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleLoginSubmit(evt) {
    evt.preventDefault();
    this.clearFormErrors();
    this.processMemberLogin('/ips4/test.php').then(data => this.processMemberDetails(data));
  }

  processMemberLogin(url) {
    const formData = new FormData();
    formData.append('id', this.state.username);
    formData.append('pw', this.state.password);

    return fetch(url, { method: 'POST', body: formData })
      .then(res => res.json())
      .catch(err => err.json());
  }

  processMemberDetails(data) {
    if (data.status !== 'SUCCESS') {
      this.setState({ formValid: false, formError: data.status });
    } else {
      this.setState({ formValid: true, loggedIn: true, fullName: data.name });
    }
  }

  clearFormErrors() {
    this.setState({ formValid: true, formError: null });
  }

  render() {
    const welcome = this.state.loggedIn ? <h2>Welcome, {this.state.fullName}!</h2> : '';
    const error = !this.state.formValid ? <p>Error: {this.state.formError}</p> : '';

    return (<div>
      {welcome}
      {error}
      <LoginForm onChange={this.handleLoginChange} onLoginSubmit={this.handleLoginSubmit} />
    </div>);
  }
}

export default LoginFormContainer;
