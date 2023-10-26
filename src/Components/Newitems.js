import React, { Component } from "react";

export default class Newitems extends Component {
  render() {
    let { title, description, imageUrl, newUrl, date, source, description2 } =
      this.props;

    return (
      <>
        <div className="cardLinkText position-relative">
          <a href={newUrl} rel="noreferrer" target="_blank">
            <div className="card my-5">
              <span
                className="badge position-absolute"
                style={{
                  zIndex: 1,
                  width: "354px",
                  top: "12.5rem",
                  borderRadius: 0,
                  fontWeight: 100,
                  backgroundColor: '#53bcd9'
                }}
              >
                {source}
              </span>
              <img
                src={
                  !imageUrl
                    ? "https://www.sme-news.co.uk/wp-content/uploads/2020/07/webpage-loading.jpg"
                    : imageUrl
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ letterSpacing: "0.1rem" }}>
                <h5 className="card-title fs-5 my-4 fw-bold">{`${title.slice(
                  0,
                  45
                )}...`}</h5>
                <p className="card-text" style={{ width: "20rem" }}>
                  {description}
                </p>
                <p className="card-text" style={{ width: "20rem" }}>
                  {description2}
                </p>
              </div>

              <div className="card-footer text-muted">
                Last Updated: {new Date(date).toDateString()}
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }
}
