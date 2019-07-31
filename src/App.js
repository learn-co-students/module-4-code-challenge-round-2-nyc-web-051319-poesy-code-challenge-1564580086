import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
state ={
  poems: [],
  loggedIn: false,
  user:''
}

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(resp => resp.json())
    .then(poem => {
      this.setState({
        poems: poem
      })
    })
  }

  login = (newUser) => {
    this.setState({
      user: newUser,
      loggedIn: true
    })
  }
  logout = () => {
    this.setState({
      loggedIn: false,
      user: ''
    })
  }

  addPoem = (newPoem, author) => {
    console.log("!!!!!!", author)
    if(this.state.loggedIn === true){
      this.setState({
        poems: [newPoem, ...this.state.poems]
      })
    }
  }
  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {!this.state.loggedIn ? <LoginForm login={this.login}/> : <UserHeader user={this.state.user} logout={this.logout}/>}
          <NewPoemForm poems={this.state.poems} addPoem={this.addPoem} user={this.state.user}/>
        </div>
        <PoemsContainer poems={this.state.poems} user={this.state.user}/>
      </div>
    ); 
  }
}

export default App;
