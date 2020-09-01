import React, { Component } from 'react'

class Assignment extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h2 className="course-name">{this.props.assignment.course}</h2>
                <p className="description">{this.props.assignment.description}</p>
                <h2 className="deadline">Deadline: {this.props.assignment.deadline}</h2>
            </div>
        )
    }
}

export default Assignment
