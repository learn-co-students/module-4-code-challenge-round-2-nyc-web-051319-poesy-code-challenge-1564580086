import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

const API = 'http://localhost:3000/poems'

class App extends React.Component {

// maybe could change username to null and remove loggedIn (change loggedIn conditionals to username presence)
  state = {
    poemsData: [],
    loggedIn: false,
    username: ''
  }

  // initial fetch
  getPoems = () => {
    fetch(API)
    .then(resp => resp.json())
    .then((fetchedPoems) => this.setState({
      poemsData: fetchedPoems
    }))
  } // end getPoems fetch


  componentDidMount(){
    this.getPoems()
  }

  onLoginSubmit = (e, username) => {
    e.preventDefault();

    this.setState({
      loggedIn: true,
      username: username
    })
  }

  onLogoutClick = () => {
    this.setState({
      loggedIn: false,
      username: ''
    })
  }

  // poem submit here because it changes "poemsData"
  onPoemSubmit = (e, title, body) => {
    e.preventDefault();

    const poemData = {
      title: title,
      content: body,
      author: this.state.username
    }

    // added persistance with POST
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poemData)
    })
    .then(resp => resp.json())
    .then((newPoemData) => this.setState({
      poemsData: [...this.state.poemsData, newPoemData]
    }))
  }

  render(){
    // deconstructed state vars
    const {poemsData, loggedIn, username} = this.state

    if (!loggedIn) {
      return (<div className="app">
        <div className="sidebar">
          <LoginForm
            onLoginSubmit={this.onLoginSubmit}
          />
        </div>
        <PoemsContainer
          poemsData={poemsData}
          />
      </div>)
    } else {
    return (
      <div className="app">
        <div className="sidebar">
          <UserHeader
            username={username}
            onLogoutClick={this.onLogoutClick}
            />
          <NewPoemForm
            onPoemSubmit={this.onPoemSubmit}
           />
        </div>
        <PoemsContainer
          poemsData={ poemsData }
         />
      </div>
    ); // end return
  }
  } // end render
} // endclass

export default App;
