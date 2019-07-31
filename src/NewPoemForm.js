import React from 'react';

class NewPoemForm extends React.Component {



  render(){
    return (
      <div className="new-poem">
        <form  onSubmit={this.props.addPoem} className="new-poem-form">
          <input name='poemName' placeholder="Name your masterpiece..." value={this.props.poemName}onChange={this.props.handlePoemForm}/>
          <textarea name='poemContent' placeholder="Your masterpiece belongs here..." value={this.props.poemContent} onChange={this.props.handlePoemForm}/>
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;