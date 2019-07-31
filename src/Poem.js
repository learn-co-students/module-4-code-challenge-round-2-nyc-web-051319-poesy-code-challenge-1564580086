import React from 'react';

class Poem extends React.Component {
  state = {
    read: false
  }

  toggleRead = () => {
    this.setState({
      read: !this.state.read
    })
  }

  render(){

    const {title, content, author} = this.props.poem

    return (
      <div style={{color: this.state.read ? "red" : "black"}} onClick={this.toggleRead}>
        <h3>{title}</h3>
        <p>{content}</p>
        <strong>- By {author}</strong>
      </div>
    ); 
  }
}

export default Poem;
