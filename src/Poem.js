import React from 'react';

class Poem extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  // controls click for "Read" function

  render(){
    // conditional not dry
    // tried to make this conditional based on logged in or not but ran out of time, could do this by making PoemsContainer render only when logged in, but wasnt in readme

    const { poemItem } = this.props
    // the entire poem instance with all data

    if (!this.state.clicked) {
    return (
      <div onClick={this.handleClick} style={{color: "black"}}>
        <h3>{poemItem.title}</h3>
        <p>{poemItem.content}</p>
        <strong>- By {poemItem.author}</strong>
      </div>
    )
  } else {
      return <div onClick={this.handleClick} style={{color: "green"}}>
        <h3>{poemItem.title}</h3>
        <p>{poemItem.content}</p>
        <strong>- By {poemItem.author}</strong>
      </div>
    }
  }
}

export default Poem;
