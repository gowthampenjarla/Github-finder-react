import React, { Component } from "react";

export class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

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
  }
}

export default UserItem;
