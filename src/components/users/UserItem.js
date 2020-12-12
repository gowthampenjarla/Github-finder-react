import React from "react";
import PropTypes from "prop-types";

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
      <div type='button' className='btn btn-dark btn-sm  my-1'>
        <a href={html_url} target='_blank' rel='noreferrer'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
