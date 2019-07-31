import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    }, () => console.log(this.state.title))
  }

  render(){
    const {title, content} = this.state
    const {createNewPoem} = this.props
    return (
      <div className="new-poem" onSubmit={(e)=>createNewPoem(e, title, content)}>
        <form className="new-poem-form">
          <input name="title" value={title} onChange={this.handleChange} placeholder="Name your masterpiece..." />
          <textarea name="content" value={content} onChange={this.handleChange} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;