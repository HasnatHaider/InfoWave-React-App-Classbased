import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="newsFooter bg-dark py-4">
          <div className="container" style={{paddingLeft: '130px'}}>
            <div className="row">
              <div className="col-lg-6 col-md-6 my-5">
                <h2 className="pb-4" style={{color: 'rgb(115, 225, 255)'}}>About Us</h2>
                <p>Learn more about InfoWave and our mission.</p>
              </div>
              <div className="col-lg-6 col-md-6 my-5">
                <h2 className="pb-4" style={{color: 'rgb(115, 225, 255)'}}>Quick Links</h2>
                <ul className="list-unstyled">
                  <li className="pb-2">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <h2 className="pb-4" style={{color: 'rgb(115, 225, 255)'}}>Follow Us</h2>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="mb-0">&copy; 2023 InfoWave - All Rights Reserved</p>
          </div>
        </footer>
      </>
    );
  }
}
