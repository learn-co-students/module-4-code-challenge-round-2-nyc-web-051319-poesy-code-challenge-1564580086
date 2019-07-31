import React from 'react';

class NewPoemForm extends React.Component {
  render(){
    return (
      <div className="new-poem">
        <form onSubmit={this.props.handlePost} className="new-poem-form">
          <input
            onChange={this.props.handleChange}
            name="title" 
            placeholder="Name your masterpiece..." />
          <textarea 
            onChange={this.props.handleChange}
            name="content"
            placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;