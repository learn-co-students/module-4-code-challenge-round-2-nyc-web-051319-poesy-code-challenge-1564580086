import React from 'react';

class Poem extends React.Component {

  state = { 
    color: "black",
    isClicked: false 
  }

  toggleColor = () => {
    this.setState({
      isClicked: !this.state.isClicked,
      color: 'red'
    }, () => {
      if (this.state.isClicked === false) {
        this.setState({
          color:'black'
        })
      }
    })
  }

  render(){
    return (
      <div  onClick={this.toggleColor} style={{color: this.state.color}}>
        <h3>{this.props.poem.title}</h3>
        <p> {this.props.poem.content} </p>
        <strong> {this.props.poem.author} </strong>
      </div>
    ); 
  }
}

export default Poem;
