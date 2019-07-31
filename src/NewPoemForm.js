import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: '',
    poemBody: ''
  }

  // deals with component state, submit in app.js because it deals with app state
  handlePoemChange = (e) => {
    this.setState({
      title: e.target.value,
      poemBody: e.target.value
    })
  }

  render(){
    // form does not clear after submit fix later

    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={(e) => this.props.onPoemSubmit(e, this.state.title, this.state.body)}>
          <input
            name="title"
            placeholder="Name your masterpiece..."
            onChange={this.handlePoemChange}
          />
          <textarea
            name="poemBody"
            placeholder="Your masterpiece belongs here..."
            onChange={this.handlePoemChange}
          />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
