import React from 'react';

class LoginForm extends React.Component {



  render(){
    return (
      <div  className="login">
        <form  onSubmit={this.props.loggedIn}className="login-form">
          <input placeholder="Enter a username..." name="username" onChange={this.props.handleLogin}/>
          <input type="submit" value="Log In" />
        </form>
      </div>
    ); 
  }
}

export default LoginForm;