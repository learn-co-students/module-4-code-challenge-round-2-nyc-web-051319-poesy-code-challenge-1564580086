import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title:'',
    content: '',
    author: ""
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value,
      author: this.props.user
    })
  }

  handleSubmit = (e) => {
    console.log("banana", this.state)
    e.preventDefault()
    this.props.addPoem(this.state)
  }
  render(){
    console.log(this.props.user)
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handleSubmit}>
          <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Name your masterpiece..." />
          <textarea name="content" value={this.state.content} onChange={this.handleChange}  placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;