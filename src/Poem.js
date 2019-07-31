import React from 'react';

class Poem extends React.Component {

  state = {
    color: null,
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      color: "blue"
    }, ()=> {
      console.log(this.state.color)
    })
  }

  render(){
    return (
      <div onClick={this.handleClick} style={{color: this.state.clicked ? this.state.color : "black"}}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>{this.props.poem.author}- By Author</strong>
      </div>
    );
  }
}

export default Poem;
