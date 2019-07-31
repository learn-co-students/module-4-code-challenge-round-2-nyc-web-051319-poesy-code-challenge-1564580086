import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

const API = 'http://localhost:3000/poems'

class App extends React.Component {

  state = {
    poems: [],
    username: ""
  }

  componentDidMount() {
    this.fetchPoems()
  }

  fetchPoems = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        poems: data
      })
    })
  }

  setUsername = (e) => {
    e.preventDefault()
    this.setState({
      username: e.target.username.value
    })
  }

  createPoem = (e, newPoem) => {
    e.preventDefault()
    if(this.state.username === "") {
      alert('Silly rabbit, poems are for SIGNED IN USERS ONLY')
    } else {
      newPoem.author = this.state.username
      this.setState({
        poems: [...this.state.poems, newPoem]
      })
    }
  }



  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.username ?
            <UserHeader username={this.state.username}/>
            :
            <LoginForm setUsername={this.setUsername}/>
          }
          <NewPoemForm createPoem={this.createPoem}/>
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
