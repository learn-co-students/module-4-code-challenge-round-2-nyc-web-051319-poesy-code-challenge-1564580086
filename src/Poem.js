import React from 'react';

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = () => {
    this.setState({
      read: !this.state.read
    })
  }
  render(){
    console.log(this.props.poem)
    return (
      <div onClick={this.handleClick} style={!this.state.read ? {color: "black"} : {color: "orange"}}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
