import React from 'react';

class LoginForm extends React.Component {
  render(){
    // console.log('form',this.props)
    return (
      <div className="login">
        <form onSubmit={this.props.handleSubmit} className="login-form">
          <input onChange={this.props.handleChange}
            name="username"
            placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;