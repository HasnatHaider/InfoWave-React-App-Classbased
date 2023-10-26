import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/" style={{color: 'rgb(115 225 255)'}}>
          <span><img
                    src={process.env.PUBLIC_URL + '/News.png'}
                    alt="Text Utilization"
                    className="img-fluid textImage"
                  /></span>
                  InfoWave</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    )
  }
}
