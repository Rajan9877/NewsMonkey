import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand mx-2" to="/">NewsMonkey</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li> 
    </ul>
  </div>
</nav>
      </>
    )
  }
}

export default Navbar