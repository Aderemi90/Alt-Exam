// import React from "react";
import { Link } from "react-router-dom";
import "./404.css"


function Error404() {
  return (
    <div>
      <h1>404 Error Page</h1>
        <p className="zoom-area"> </p>
      <div className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="."><span className="screen-reader-text">.</span></span>
      </div>
      <div>
        <p> Go back to <Link to= '/'> Homepage </Link></p>
      </div> </div>
)
}

export default Error404;