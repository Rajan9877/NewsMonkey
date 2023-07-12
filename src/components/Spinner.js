import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className='text-center'>
        <img src="loader.gif" style={{width: "50px"}}/>
        </div>
      </>
    )
  }
}

export default Spinner