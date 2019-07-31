import React, { Component } from 'react'
import Poem from './Poem'

export default class FavoritePoemsContainer extends Component {

    displayPoems = () => {
        return this.props.poems.map(poem => {
            return <Poem key={poem.id} poem={poem} addToLiked={this.props.addToLiked} />
        })
    }

    render() {
        return (
            <div>
                {this.displayPoems()}
            </div>
        )
    }
}
