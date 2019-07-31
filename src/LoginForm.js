import React from 'react';

class LoginForm extends React.Component {
  state = {
    name: ""
  }

  handleChange = (event) => {

    this.setState({
      name: event.target.value
    }, () => {
      console.log(this.state.name)
    })

  }

  render(){
    console.log(this.props.removeUser)
    return (
      <div className="login">
      <form className="login-form">
      <input onChange={(event)=>this.handleChange(event)} placeholder="Enter a username..." />
      <input onClick={(event) => this.props.handleClick(event, this.state.name)} type="submit" value="Log In"/>
      </form>
      </div>
    );
    }
  }


export default LoginForm;
