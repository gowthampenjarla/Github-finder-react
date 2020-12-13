import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={login}
        className='rounded-circle'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      {/* <a href={html_url} class='my-2 btn btn-dark btn-sm' target='_blank'>
        More
      </a> */}
      <Button
        href={html_url}
        target='_blank'
        variant='dark'
        size='sm'
        className='my-2'
      >
        More
      </Button>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
