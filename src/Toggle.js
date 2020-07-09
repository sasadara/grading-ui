import React, { Component } from 'react'

export default class Toggle extends Component {
    state1 = {
        on : false,
    }
    state2 = {
        on : true,
    }

    toggle = () => {
        this.setState1({
            on: !this.state.on
        })
        this.setState2({
            on: !this.state.on
        })
    }

    render() {
        return (
            <h1>{ this.state1.on &&  this.props.children }
                <button onClick={this.toggle}>Show/Hide</button>
        </h1>
        )
    }
}
