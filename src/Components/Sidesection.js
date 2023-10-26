import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidesection extends Component {
  render() {
    return (
      <>
        <div className="right-sidebar">
          <div className="px-5 mt-5">
            <div className="ad-section mb-5">
              <h2>Categories</h2>
            </div>
            <div className="related-content d-flex flex-column">
              <Link className="my-3 text-uppercase" to="/">
                All
              </Link>
              <Link className="my-3 text-uppercase" to="/business">
                Business
              </Link>
              <Link className="my-3 text-uppercase" to="/entertainment">
                Entertainment
              </Link>
              <Link className="my-3 text-uppercase" to="/health">
                Health
              </Link>
              <Link className="my-3 text-uppercase" to="/science">
                Science
              </Link>
              <Link className="my-3 text-uppercase" to="/sports">
                Sports
              </Link>
              <Link className="my-3 text-uppercase" to="/technology">
                Technology
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
