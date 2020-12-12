import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-dark text-light mb-3'>
      {/* <i className='fa fa-github'></i> */}
      <h2 className='container'> {title}</h2>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
