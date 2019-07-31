import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    username: null,
    loggedIn: false,
    poemName: null,
    poemContent: null,
  }

  fetchPoems = () => {
    fetch(`http://localhost:3000/poems`)
    .then(resp => resp.json())
    .then(poems => {
      this.setState({
        poems: poems
      })
    })
  }

  componentDidMount() {
    this.fetchPoems()
  }


  handleLogin = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loggedIn = (event) => {
    event.preventDefault()
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  

    handlePoemForm = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    addPoem = (event) => {
      event.preventDefault()
      this.setState({
        poems: [...this.state.poems, {title:this.state.poemName, content:this.state.poemContent, author:this.state.username}]
      }, () => {
        this.setState({
          poemName: "",
          poemContent: ""
        })
      })
    }

  

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.loggedIn ? 
          <div>
            <UserHeader username={this.state.username}/>
            <NewPoemForm handlePoemForm={this.handlePoemForm} addPoem={this.addPoem} poemName={this.state.poemName} poemContent={this.state.poemContent} /> 
          </div>
            : 
          <LoginForm handleLogin={this.handleLogin} loggedIn={this.loggedIn}/>}
    
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
