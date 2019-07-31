import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  

  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={(e) => this.props.setUsername(e)}>
          <input placeholder="Enter a username..." name="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;