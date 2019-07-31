import React from 'react';

class Poem extends React.Component {

  state = {
    read: false
  }

  markRead = ()=>{
    const {currentUser} = this.props
    if(currentUser){
      this.setState({
        read: !this.state.read
      },()=>console.log(this.state.read))
    }
  }

  render(){
    const {title, content, author} = this.props.poem
    const {read} = this.state
    return (
      <div style={read ? { color:  "green"} :{color: "black"}} onClick={this.markRead}>
        <h3>{title}</h3>
        <p>{content}</p>
        <strong>- {author}</strong>
      </div>
    ); 
  }
}

export default Poem;
