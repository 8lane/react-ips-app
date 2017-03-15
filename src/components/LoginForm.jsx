import React from 'react';

class LoginForm extends React.Component {
  render() {
    let loginForm = null;

    loginForm = (
      <form onSubmit={this.props.onLoginSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={this.props.onChange} />
        <input type="password" name="password" onChange={this.props.onChange} />
        <button type="submit">Login</button>
      </form>
    );

    return <section>{loginForm}</section>;
  }
}

LoginForm.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onLoginSubmit: React.PropTypes.func.isRequired
};

export default LoginForm;
