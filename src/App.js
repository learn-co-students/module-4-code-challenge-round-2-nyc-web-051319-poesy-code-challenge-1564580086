import React, {Fragment} from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    currentUser: ""
  }

  getPoems =()=>{
    fetch('http://localhost:3000/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({poems}))
  }

  componentDidMount = ()=>{
    this.getPoems()
  }

  login =(e, user)=>{
    e.preventDefault()
    this.setState({
      currentUser: user
    })
  }

  logout = ()=>{
    this.setState({
      currentUser: ""
    })
  }

  createNewPoem = (e, title, content)=>{
    e.preventDefault()
    const {poems, currentUser} = this.state
    const id = poems[poems.length-1].id + 1
    const newPoem ={
      id: id,
      title: title,
      content: content,
      author: currentUser
    }
    this.setState({
      poems: [newPoem, ...poems]
    })
  }

  render(){
    const { poems, currentUser } = this.state

    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm currentUser={currentUser} handleChange={this.handleChange} login={this.login}/>
          {currentUser ? 
            <Fragment>
              <UserHeader currentUser={currentUser} logout={this.logout}/>
              <NewPoemForm createNewPoem={this.createNewPoem}/>
            </Fragment>
            : null}
        </div>
        <PoemsContainer poems={poems} currentUser={currentUser}/>
      </div>
    ); 
  }
}

export default App;
