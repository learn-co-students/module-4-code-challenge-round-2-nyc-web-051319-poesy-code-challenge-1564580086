import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  renderPoems =()=>{
    const {poems, currentUser} = this.props
    return poems.map(poem => <Poem key={poem.id} poem={poem} currentUser={currentUser}/>)
  }

  render(){
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