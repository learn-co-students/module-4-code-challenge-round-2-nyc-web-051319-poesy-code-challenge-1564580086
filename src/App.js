import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'
import FavoritePoemsContainer from './FavoritePoemsContainer';

const API = 'http://localhost:3000/poems'

class App extends React.Component {

  state = {
    poems: [],
    favPoems: [],
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
      }, () => {
        fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accepts: "application/json"
          },
          body: JSON.stringify({
            title: newPoem.title,
            content: newPoem.content,
            author: newPoem.author
          })
        })
        .then(r => r.json())
        .then(data => console.log(data))
      })
    }
  }

  addToLiked = (e, poem) => {
    e.stopPropagation()
    if(!this.state.favPoems.includes(poem)) {
      this.setState({
        favPoems: [...this.state.favPoems, poem]
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
        <PoemsContainer poems={this.state.poems} addToLiked={this.addToLiked}/>
        <FavoritePoemsContainer poems={this.state.favPoems}/>
      </div>
    ); 
  }
}

export default App;
