import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  displayPoems = () => {
    return this.props.poems.map(poem => {
      return <Poem key={poem.id} poem={poem} addToLiked={this.props.addToLiked}/>
    })
  }

  render(){
    return (
      <div className="poems-container">
        {this.displayPoems()}
      </div>
    ); 
  }
}

export default PoemsContainer;