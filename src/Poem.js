import React from 'react';

class Poem extends React.Component {

  state={
    clicked: false
  }
    handleClick = () => {
      console.log('ive been hit!')
      this.setState({
        clicked: !this.state.clicked
      })
    }

  render(){
    return (
      <div onClick={this.handleClick} style={this.state.clicked ? {color: "green"} :{color: "black"} }>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
