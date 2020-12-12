import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "GitHub Finder",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className='navbar bg-dark text-light'>
        {/* <i className='fa fa-github'></i> */}
        <h2> {this.props.title}</h2>
      </nav>
    );
  }
}

export default Navbar;
