import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state = {
    poems:[],
    user: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    	.then(res=>res.json())
    	.then(poems=> {
        this.setState({
          poems: poems
        }, ()=> {
          console.log(this.state.poems)
        })
      })
  }

  addUser = (event, name) => {
    event.preventDefault()
    console.log('added user', event, name)
    this.setState({
      user: name
    },() => {
      console.log("added user", this.state.user)
    })
  }

  removeUser= ()=> {
    console.log('remove user')
    this.setState({
      user: ""
    })
  }

  submitPoem = (event, title, content) => {
    event.preventDefault()
    if(this.state.user){
      const newPoem = {
        author: this.state.user,
        title: title,
        content: content
      }
      console.log('make a poem', event, title, content)
      fetch('http://localhost:3000/poems', {
        method: "POST",
        headers: {"Content-type": "application/json",
          "Accept": "appliation/json"},
        body: JSON.stringify(newPoem)  
      })

      this.setState({
        poems: [...this.state.poems, newPoem]
      })

    }

  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
        {this.state.user ?
          <UserHeader removeUser={this.removeUser} user={this.state.user} />
          :
          <LoginForm handleClick={this.addUser} />}
          <NewPoemForm user={this.state.user} submitPoem={this.submitPoem} />
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}
//still need to toggle user logout
export default App;
