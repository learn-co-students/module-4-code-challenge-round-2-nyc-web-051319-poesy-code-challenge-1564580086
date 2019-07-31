import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: ""
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={(e) => this.props.createPoem(e, this.state)} >
          <input placeholder="Name your masterpiece..." name="title" value={this.state.title} onChange={this.handleChange}/>
          <textarea placeholder="Your masterpiece belongs here..." name="content" value={this.state.content} onChange={this.handleChange}/>
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;