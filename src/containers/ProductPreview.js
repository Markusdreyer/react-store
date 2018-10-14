import React, { Component } from 'react'

import VideoContainer from '../components/VideoContainer/VideoContainer'
import SelectionContainer from '../components/SelectionContainer/SelectionContainer'

export default class ProductPreview extends Component {
    render() {
        return (
            <div>
                <VideoContainer />
                <SelectionContainer
                    decrement={this.props.decrement}
                    increment={this.props.increment}
                    numberOfProducts={this.props.numberOfProducts}
                />
            </div>
        )
    }
}
