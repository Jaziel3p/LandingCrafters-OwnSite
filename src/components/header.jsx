import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="responsive-heading">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="responsive-paragraph">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Conoce más
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};