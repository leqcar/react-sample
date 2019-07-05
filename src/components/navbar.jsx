import React from "react";

//Stateless functional component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalNoCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
