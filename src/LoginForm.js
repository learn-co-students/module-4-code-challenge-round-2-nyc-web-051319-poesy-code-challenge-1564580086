import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    }, () => console.log(this.state.username))
  }

  render(){
    const {username} = this.state
    const {login, currentUser} = this.props

    return (
      <div className="login">
        {!currentUser ? 
        <form className="login-form" onSubmit={(e)=>login(e, username)}>
          <input name="username" value={username} onChange={this.handleChange} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
          : null}
      </div>
    ); 
  }
}

export default LoginForm;