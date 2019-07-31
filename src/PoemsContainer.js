import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  renderPoems= () => {
      return this.props.poems.map(poem => {
        return <Poem poem={poem} />
      })
  }
  render(){
    console.log(this.props.poems)
    return (
      <div className="poems-container">
        {
         this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;
