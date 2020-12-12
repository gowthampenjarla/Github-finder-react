import React from "react";
import UserItem from "./UserItem";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const Users = ({ loading, users }) => {
  if (loading) {
    return (
      <Loader
        className='spinner'
        type='TailSpin'
        color='#073b4c'
        height={100}
        width={100}
      />
    );
  } else {
    return (
      <div className='row'>
        {users.map((user) => (
          <div className='col-sm-4' key={user.id}>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Users;
