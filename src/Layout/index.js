import React from "react";
import "./Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div className="container">{props.children}</div>
    </React.Fragment>
  );
}

export { Layout };
