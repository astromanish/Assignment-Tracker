import React, { Component } from 'react'
import assignment from './assignmentData'
import Assignment from './assignment'

class AssignmentList extends Component {
    render() {
        const assignmentArray = assignment.map((assignment) => {
            return(
                <Assignment id={assignment.id} assignment={assignment} />
            )
        })
        return (
            <div>
                {assignmentArray}
            </div>
        )
    }
}

export default AssignmentList
