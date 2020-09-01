import React, { Component } from 'react'

class AddAssigment extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="add-assignment">Add Assignment</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="Course">Course Name</label>
                        <input type="text" placeholder="Course Name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Assignment Description</label>
                        <input type="text" placeholder="Assignment Description" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Course">Deadline</label>
                        <input type="date" placeholder="Deadline" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Add</button>
                </form>
                <br/>
                <br/>

                
            </div>
        )
    }
}

export default AddAssigment
