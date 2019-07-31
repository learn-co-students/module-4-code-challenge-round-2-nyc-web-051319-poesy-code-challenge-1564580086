import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

const BASE_URL = `http://localhost:3001/poems`

class App extends React.Component {

  state={
    poems: [],
    username: '',
    loggedIn: false,
    title: '',
    content: '',
    // clicked: false
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(poemsData => {
      this.setState({
        poems: poemsData
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })  
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('submit', this.state.username, 'user', this.state.user)
    this.setState({
      username: this.state.username,
      loggedIn : true
    })
  }

  logout = () => {
    this.setState({
      username: '',
      loggedIn: false
    })
  }

  handlePost = (event) => {
    event.preventDefault()
    console.log('post')
    const newPoem = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.username
    }
    const updatedPoems = [...this.state.poems, newPoem]
    this.setState({
      poems: updatedPoems
    })
  }




  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.loggedIn 
          ?
          <div>
            <UserHeader 
              username={this.state.username} 
              logout={this.logout}
              />
            < NewPoemForm
              handleChange={this.handleChange}
              handlePost={this.handlePost}
               / >
          </div>
          : 
          <LoginForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
          }
        </div>
        <PoemsContainer 
          clicked={this.state.clicked}
          handleClick={this.handleClick}
          poems={this.state.poems}
          />
      </div>
    ); 
  }
}

export default App;
