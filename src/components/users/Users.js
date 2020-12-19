import React, { useContext } from "react";
import UserItem from "./UserItem";
import Loader from "react-loader-spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
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

export default Users;
