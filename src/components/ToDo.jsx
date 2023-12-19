import React from 'react'

const ToDo = () => {
  return (
    <center className="">
      <h1 className="p-2 fw-semibold">ToDo List</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter ToDo here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </center>
  )
}

export default ToDo