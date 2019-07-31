import React from 'react';
import Poem from './Poem';


class PoemsContainer extends React.Component {

  render(){
    const { poemsData} = this.props

    return (
      <div className="poems-container">
      {/*using map because I want every item, no conditional*/}
        {
          poemsData.map(poemItem => <Poem poemItem={poemItem} key={`poem-${poemItem.id}`} />)

        }
        { /* BONUS:
          <div style={{borderColor: "red"}}>
        {
          poemsData.map(poemItem => {
            if (poemItem.liked) {
              return <Poem poemItem={poemItem} />
            } else {
              return null
            }
          }
        )
        }
        </div> */}
      </div>
    );
  }
}

export default PoemsContainer;
