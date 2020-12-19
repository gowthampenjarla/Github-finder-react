import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
    // this.props.searchUsers(this.state.text);
  };

  return (
    <div className='mt-4'>
      <Alert
        variant='danger'
        show={alert}
        onClose={() => setAlert(false)}
        dismissible
      >
        Search field can not be blank
      </Alert>
      <form onSubmit={onSubmit}>
        <div className='form-group row justify-content-between'>
          <input
            className='col-sm-10 form-control'
            type='text'
            name='text'
            value={text}
            placeholder='Search users'
            onChange={onChange}
          />
          <input className='col-sm-1 btn' value='Submit' type='submit' />
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn  btn-block mb-4'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
