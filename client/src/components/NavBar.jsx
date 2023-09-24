import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/projects" className="nav-item nav-link">
              Projects
            </Link>
            <Link to="/blog" className="nav-item nav-link">
              Blog
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
