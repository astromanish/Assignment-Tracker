import React, { Component } from 'react'

class Assignment extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.assignment.course}</h2>
                <p>{this.props.assignment.description}</p>
                <h2>{this.props.assignment.deadline}</h2>
            </div>
        )
    }
}

export default Assignment
