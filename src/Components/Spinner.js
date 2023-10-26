import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <>
       <div className="text-center my-4">
            <div className="spinner-border" role="status">
            </div>
        </div> 
      </>
    )
  }
}
