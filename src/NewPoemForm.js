import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: "",
    content: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=> {
      console.log(this.state.title)
    })
  }
  render(){
    console.log(this.props.user)
    return (
      <div className="new-poem">
        <form className="new-poem-form">
          <input onChange={this.handleChange} name="title" placeholder="Name your masterpiece..." />
          <textarea onChange={this.handleChange} name="content" placeholder="Your masterpiece belongs here..." />
          <input onClick={(event)=>this.props.submitPoem(event, this.state.title, this.state.content)} type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
