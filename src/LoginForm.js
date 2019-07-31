import React from 'react';

class LoginForm extends React.Component {
  state = {
    user: ''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.user)
  }

  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input name="user" onChange={this.handleChange} value={this.state.user} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;