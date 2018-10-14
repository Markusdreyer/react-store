import React, { Component } from 'react'
import './Image.scss'

export default class Image extends Component {
    render() {
        return (
            <img src={this.props.src} alt="mobility ball"></img>
        )
    }
}
