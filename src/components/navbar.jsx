import React from "react";

//Stateless functional component
const NavBar = ({ totalNoCounter }) => {
  console.log("** NavBar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalNoCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
