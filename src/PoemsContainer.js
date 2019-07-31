import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(poem => {
      return <Poem 
        key={poem.id}  
        poem={poem} 
        // handleClick={this.props.handleClick}
        clicked={this.props.clicked}
        />
    })
  }

  render(){
    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    ); 
  }
}

export default PoemsContainer;