import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export class Search extends Component {
  state = {
    text: "",
    showAlert: false,
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 3000);
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <div>
        <Alert
          variant='danger'
          show={this.state.showAlert}
          onClose={() => this.setState({ showAlert: false })}
          dismissible
        >
          Search field can not be blank
        </Alert>
        <form onSubmit={this.onSubmit}>
          <div className='form-group row justify-content-around'>
            <input
              className='col-sm-10 form-control'
              type='text'
              name='text'
              value={this.state.text}
              placeholder='Search users'
              onChange={this.onChange}
            />
            <input
              className='col-sm-1 btn btn-dark'
              value='Submit'
              type='submit'
            />
          </div>
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-secondary btn-block mb-3'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
