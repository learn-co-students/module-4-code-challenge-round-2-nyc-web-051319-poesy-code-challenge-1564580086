import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ''
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render(){

    return (
      <div className="login">
        <form
          className="login-form"
          onSubmit={(e) => this.props.onLoginSubmit(e, this.state.username)}
        >
          <input
            name="username" 
            placeholder="Enter a username..."
            onChange={this.handleChange}
          />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
